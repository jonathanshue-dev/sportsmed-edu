# 查核紀錄 2026-07-25 — tendinopathy-rehab（肌腱病變復健）

**查核方式：文獻查核（非 OpenEvidence）。** 當日 OpenEvidence relay 的瀏覽器 extension service worker 被 Edge 無聲回收（`edge://extensions` 顯示 `service worker (Inactive)`、DevTools Console 無任何例外），請求送達後永不回應，故改以 PubMed／PMC／BJSM／JOSPT／AJSM／Cochrane 公開文獻逐條查核。頁面標示已如實寫為「文獻查核 PubMed／BJSM／JOSPT」而非 OpenEvidence。

## 逐條結論

| # | 主張 | 結論 |
|---|------|------|
| 1 | 非發炎為主／完全休息無效／漸進負荷為第一線 | **需修正（已改）** |
| 2 | 等長收縮止痛效果被誇大、後續無法複製 | 確認 |
| 3 | 離心 vs HSR 效果相當、HSR 順從性較好 | 確認 |
| 4 | 疼痛監測模型（≤5/10、隔天回基線、不可週週惡化） | 確認 |
| 5 | 四階段含儲能／增強式階段 | 確認 |
| 6 | 恢復期 3–6 個月以上 | 確認 |
| 7 | 止點型避免超過中立位背屈／避免壓迫性伸展 | **確認並強化（已補）** |
| 8 | 類固醇注射短期有效、長期較差 | 確認 |
| 9 | 賽季中依疼痛監測繼續運動可行 | 確認 |

## 已做的內容修正（zh／en 同步，各 2 處）

1. **發炎的描述過於絕對** → 原寫「幾乎沒有典型的發炎細胞」不精確。Millar 2021（Nat Rev Dis Primers）指出免疫細胞與發炎介質增加其實是顯著特徵。改為「不是紅腫熱痛那種典型發炎，而是修復失衡，仍有一些發炎細胞與發炎物質參與」。
2. **止點型阿基里斯腱補充減壓做法** → 依 Pringels 2025（BJSM）RCT：低壓迫式復健優於全範圍下沉，VISA-A 於 12 週多 12.9 分、24 週多 10.4 分，滿意度 94.7% vs 57.9%。已補「暫時別拉小腿筋 ＋ 鞋內加足跟墊」。

## 引用核實

既有 5 篇**全部確認存在且與所引一致**：
- Alfredson 1998 AJSM 26(3):360-6（PMID 9617396）
- Cook & Purdam 2009 BJSM 43(6):409-16（PMID 18812414）
- Beyer 2015 AJSM 43(7):1704-11（PMID 26018970）
- Rio 2015 BJSM 49(19):1277-83（PMID 25979840）
- Silbernagel 2007 AJSM 35(6):897-906

新增 5 篇（皆已核實）：Millar 2021、Clifford 2020（BMJ Open SEM，等長收縮未能複製）、Silbernagel & Crossley 2015（JOSPT，回場方案）、Coombes 2010（Lancet，注射）、Pringels 2025（BJSM，低壓迫 RCT）。

## 需醫師本人判讀（3 項）

1. 等長收縮劑量「45 秒 × 5 組」與文中「3–5/10」門檻屬臨床慣用值，非直接由試驗導出（Silbernagel 原模型為 ≤5/10）。
2. 足跟墊高度英文版未給數字、中文版僅泛稱；若要標數值需對照 Pringels 原始 protocol。
3. 「完全休息會讓肌腱變弱」機轉合理，但依據為 wait-and-see 對照組與失用研究等間接證據，非直接試驗。

## 待辦

- OpenEvidence extension 修復後，重跑一次本主題的 `oe_ask` 查核；若無實質差異，將 `verified_via` 改回 `OpenEvidence` 並更新 `last_verified`。
