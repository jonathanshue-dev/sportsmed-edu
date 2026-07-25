# 每月排程證據查核 2026-07-25（scheduled task: sportsmed-evidence-check）

**性質：** 自動排程觸發的每月查核。使用者不在場，依 SOP 自主執行。

## 前置檢查（兩段式）— 全部通過

| 步驟 | 結果 |
|------|------|
| `oe_health` | 通過（daemon up、PID 13460、extension_connected: true、version_match） |
| `oe_auth_status`（真正存活探測，full round-trip） | 通過（statusCode 200、已認證 Jonathan Shue、Chrome relay 存活） |

relay 這次在 **Chrome**，service worker 存活正常（先前 Edge 無聲回收 MV3 service worker 的問題未重現）。

## 掃描結果：0 篇到期

7 篇 zh-tw 主題的 `last_verified` 皆為 **2026-07-25**（今日），無任何一篇距今超過 90 天。

| 主題 | last_verified | verified_via |
|------|---------------|--------------|
| plantar-fasciitis | 2026-07-25 | OpenEvidence |
| ankle-sprain | 2026-07-25 | OpenEvidence |
| rotator-cuff | 2026-07-25 | OpenEvidence |
| low-back-pain | 2026-07-25 | OpenEvidence |
| frozen-shoulder | 2026-07-25 | OpenEvidence |
| pre-participation-screening | 2026-07-25 | OpenEvidence |
| tendinopathy-rehab | 2026-07-25 | OpenEvidence |

## 哨兵規則處理：本次不重複發問（附理由）

哨兵規則的目的是「確保 pipeline 每月被完整走過一次，避免 relay 靜默故障數月才被發現」。此目的**今日已被充分滿足**：

- 本日 15:23 已完成一次**真實 `oe_ask` 全流程哨兵實跑**（plantar-fasciitis，article `21d03645-ed2a-4d71-bbcc-c6399dda4ee2`），log `2026-07-25-sentinel-dryrun.md` 記錄全段通過。
- 同日 tendinopathy-rehab 亦完成一次真實 OpenEvidence 查核（article `da581487-b317-405d-a212-bb11f895821a`，15 篇引用全數通過 Crossref）。
- 本次排程執行又獨立跑了 `oe_auth_status`（SOP 定義的「真正存活探測」，full network round-trip），回傳 200 存活。

即：完整的 `oe_ask → oe_article_get` 路徑在 3 小時內已被真實走過並通過，且本次又以 full round-trip 的 auth 探測再次確認 relay 存活。再發第 4 次同性質查詢屬純冗餘，故**本次不重複 `oe_ask`**。此為自主判斷，特此如實記錄。

（若下次排程執行時距上次真實 `oe_ask` 已超過該月，則應照哨兵規則實際發問，不可再以本理由略過。）

## 結論：無新增建議修改

本次未發現需處理的新事項。但**先前的建議修改仍待你核准**（見下）。

## ⚠️ 尚未核准、待你決定的既有建議修改

以下建議修改在今日產生但**尚未套用內文**，仍等你核准：

1. **plantar-fasciitis — 9 項建議**（詳見 `2026-07-25-sentinel-dryrun.md`）
   - 最重要：**預後說法可能過度樂觀**。現行「約 8–9 成一年內改善」vs 新證據「約 44% 患者 15 年後仍有症狀、會好者平均約 2 年」。建議必改，避免病人期待落差。
   - 其他 8 項為選擇性補充：乾針、肉毒毒素比較性排序、LLLT、APTA 不建議治療性超音波、貼紮/徒手效期具體化、步行計畫、鞋墊成本效益。

tendinopathy-rehab 的建議修改於今日已於初稿階段直接套用並同步 zh/en（見該篇 log），無待辦。

## 收尾

- 本次無內文或 frontmatter 變更（所有 `last_verified` 已是今日），僅新增本 log 檔。
- 下次排程：每月 1 日 09:00。
