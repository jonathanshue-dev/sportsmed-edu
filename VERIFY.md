# 內容證據驗證 SOP（VERIFY.md）

這份文件是「每月自動證據查核」排程與手動 `/verify-content` 的執行手冊。
執行者：Claude Code（需 OpenEvidence MCP 在線：先呼叫 `oe_health` 確認 relay + extension 連線）。

## 目標

確保 `src/content/topics/` 內每篇衛教文章的臨床主張與最新實證一致，
並維護 frontmatter 的 `last_verified` 日期與 `references`。

## 流程

1. **前置檢查**
   - `oe_health`：`healthy: true` 且 `extension_connected: true` 才繼續；否則中止並回報使用者「OpenEvidence relay 未連線，本次驗證跳過」。
2. **掃描文章**
   - 讀取 `src/content/topics/zh-tw/*.md` 的 frontmatter。
   - 挑出 `last_verified` 距今超過 **90 天** 的主題（首次全跑）。
3. **逐題查核**（每題一次 `oe_ask`，fire-and-forget 後用 `oe_article_get` 取回）
   - 問題模板：
     `Since {last_verified}, have there been any new guidelines, major trials, or systematic reviews that change the recommended management of {topic}? Summarize only practice-changing findings; if nothing changed, say so explicitly.`
   - 注意 rate limit：兩次 `oe_ask` 間隔 ≥ 1 秒。
4. **比對與產出 diff 報告**
   - 逐篇比對答案與文章內容（zh 與 en 都要看）。
   - 寫入 `verification/log/{YYYY-MM-DD}.md`，每篇一節：
     - `結論：無變動` → 只更新該篇 frontmatter 的 `last_verified` 為今天。
     - `結論：建議修改` → 列出「文章現行說法 vs 新證據」的對照表與建議修改文字，**不要直接改文章內文**，等使用者核准。
5. **回報使用者**
   - 摘要：幾篇無變動、幾篇建議修改（附 log 檔連結）。
   - 若有建議修改，等使用者確認後才改內文；改完 zh/en 兩版都要同步，並更新 `last_verified` 與 `references`。
6. **收尾**
   - `git add -A && git commit -m "chore: monthly evidence verification {YYYY-MM-DD}"`，push 觸發自動部署。

## 文章 frontmatter 規格

```yaml
title: 中文標題（en 版為英文標題）
description: 一句話描述
category: lower-limb | upper-limb | spine | prevention
last_verified: "YYYY-MM-DD"   # 最近一次 OpenEvidence 查核通過的日期
references:
  - "作者/機構. 標題. 期刊/出版者, 年份."
```

## 原則

- 引用只放真實存在、可查證的文獻；OpenEvidence 回答附的 citations 是主要來源。
- 內文不放 inline citation 編號，references 由頁面模板統一渲染。
- zh-tw 與 en 內容必須同步修改，不可只改一邊。
- 有疑慮（證據互相矛盾、答案含糊）→ 標記為「需人工判讀」，不要自行取捨。
