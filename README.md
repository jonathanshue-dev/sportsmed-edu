# sportsmed-edu 運動醫學衛教站

雙語（繁中／英文）運動醫學衛教靜態網站。內容以醫學實證撰寫，透過 OpenEvidence MCP 定期查核更新。

## 技術

- [Astro](https://astro.build) 靜態網站，內容為 markdown（`src/content/topics/{zh-tw,en}/`）
- GitHub Pages 自動部署（push `main` 觸發 `.github/workflows/deploy.yml`）
- 證據查核 SOP 見 [VERIFY.md](VERIFY.md)，查核紀錄在 `verification/log/`

## 開發

```bash
npm install
npm run dev      # http://localhost:4321/sportsmed-edu
npm run build    # 輸出 dist/
```

## 新增主題

1. 在 `src/content/topics/zh-tw/` 與 `en/` 各建一個同名 `slug.md`（frontmatter 規格見 VERIFY.md）
2. 首頁會依 `category` 自動分組列出
3. 發佈前用 OpenEvidence 查核關鍵臨床主張，填入 `last_verified` 與 `references`
