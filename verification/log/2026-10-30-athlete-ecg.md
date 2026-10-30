# 證據查核 2026-10-30：運動員心電圖（athlete-ecg）

**對象**：`src/content/topics/{zh-tw,en}/athlete-ecg.md`（新草稿，`verification_pending: true`，首次 OpenEvidence 查核）
**分支**：`claude/ioc-diploma-sports-medicine-pxcocg`

## 前置檢查

- `oe_health`：`healthy: true`、`extension_connected: true`、`version_match: true`
- `oe_auth_status`：200，`authenticated: true`（帳號 Jonathan Shue）→ pipeline 存活

## 提問

| # | article_id | 內容 |
|---|-----------|------|
| 1 | `6884cd86-3a20-4977-b5e4-2e06a0e57aa5` | 逐條事實查核文章 8 項主張（正常／邊界／異常發現與閾值、側壁 TWI 處置、Pelliccia 2008、Corrado 2006、AHA/ACC 2025、冠狀動脈起源異常） |
| 2 | `8b14d958-7465-467c-ae63-cd82c350c9d1` | VERIFY.md 模板題：2017 年以來是否有改變運動員心電圖判讀／處置的新指引、試驗或系統性回顧 |

## 逐條結果（問題 1）

| # | 主張 | 判定 |
|---|------|------|
| 1 | 2017 國際標準「正常（訓練相關）」清單 | ✅ 正確 |
| 2 | 邊界發現：單一項不需追查，≥2 項需評估 | ✅ 正確 |
| 3 | 異常發現清單與閾值（QTc ≥470/≥480、QRS ≥140、PR ≥400、<30 bpm、≥2 PVC/10 秒、僅 Brugada type 1） | ✅ 正確 |
| 4 | 側壁 TWI：超音波正常時才做心臟 MRI | ⚠️ **需修正**（見下） |
| 5 | Pelliccia NEJM 2008 | ✅ 正確（追蹤中 3 HCM、1 DCM、1 ARVC；對照組無） |
| 6 | Corrado JAMA 2006 | ✅ 正確（下降 89%；觀察性研究） |
| 7 | AHA/ACC 2025：共同決策；加做 ECG「合理」需訓練判讀者＋後續資源 | ✅ 正確 |
| 8 | ECG 無法偵測冠狀動脈起源異常 | ✅ 正確 |

## 結論：建議修改（等待使用者核准，未改內文）

### 修改 1（必要）—— 心臟 MRI 不是「超音波正常後」才做

| | 內容 |
|---|------|
| **文章現行（zh L85）** | 心臟磁振造影（cardiac MRI）：當心電圖警訊明顯（例如側壁 T 波倒置）但超音波看不出問題時，磁振造影對早期心肌病的偵測更敏感。 |
| **文章現行（en）** | Cardiac MRI: when the ECG warning sign is clear (e.g. lateral T-wave inversion) but the echo looks normal, MRI is more sensitive for early cardiomyopathy. |
| **新證據** | 側壁 TWI 的初始評估應**同時**做心臟超音波、心臟 MRI、運動心電圖（＋長時間心電圖監測），MRI 不以超音波正常為前提。若查無結構性疾病：**每年心臟超音波（尤其 <35 歲）＋每 2–4 年心臟 MRI**。（Finocchiaro et al., Eur Heart J 2026, doi:10.1093/eurheartj/ehaf646；SICSPORT 2025, doi:10.1016/j.ijcard.2025.132968） |
| **建議 zh** | **心臟磁振造影**（cardiac MRI）：當出現側壁 T 波倒置這類明確警訊時，通常會和心臟超音波**一起安排**，因為磁振造影對早期心肌病更敏感，超音波正常不代表可以省略。（證據等級：國際專家共識） |
| **建議 en** | **Cardiac MRI**: for a clear warning sign such as lateral T-wave inversion, MRI is usually done **alongside** the echo, not only after it. It is more sensitive for early cardiomyopathy, so a normal echo does not rule it out. (Evidence level: international expert consensus) |

並在〈長期追蹤〉段補一句具體頻率：
- zh：「專家建議通常是**每年做心臟超音波，每 2–4 年做一次心臟磁振造影**。」
- en："Experts typically suggest **a yearly echocardiogram and a cardiac MRI every 2–4 years**."

### 修改 2（建議）—— 「能不能繼續運動」補上「等待評估期間先暫停比賽」

| | 內容 |
|---|------|
| **文章現行（zh L95–96）** | 「心電圖異常」不等於「禁止運動」。…共同決策…而不是一律禁賽。 |
| **新證據** | AHA/ACC 2025 對無症狀但 ECG 異常的運動員，支持**在完成評估前暫時退出比賽**，再依結果個別化決定。單純 TWI 且查無結構性疾病者**不強制限制運動**，但需定期追蹤＋一等親篩檢。 |
| **建議 zh** | 新增一點：「在後續檢查完成之前，通常建議**先暫停比賽與高強度訓練**；檢查結果出來後，再和醫師一起決定。」 |
| **建議 en** | Add: "Until the follow-up tests are done, you will usually be advised to **pause competition and hard training**; then decide with your doctor once the results are in." |

### 修改 3（可選）—— references 加入 2025–2026 新文獻

若採納修改 1／2，建議 references 增列：
- Finocchiaro G, et al. Abnormal electrocardiogram findings in athletes. European Heart Journal, 2026. doi:10.1093/eurheartj/ehaf646
- Interpretation and Management of T Wave Inversion in Athletes: An Expert Opinion Statement of the Italian Society of Sports Cardiology (SICSPORT). International Journal of Cardiology, 2025. doi:10.1016/j.ijcard.2025.132968

### 需人工判讀（未列為修改）

- **下壁 TWI**：文章把側壁與下壁 TWI 並列為最重要警訊。2017 標準仍列為異常（文章正確），但新文件指出**單純下壁 TWI 的意義較不確定**，且在黑人運動員診斷率低。是否要在衛教文中區分，請判斷；目前寫法不算錯。
- 問題 2 答案中「黑人 vs 白人運動員 TWI 診斷率 19% vs 56%」一句的敘述前後矛盾（同句又寫「約 10 倍較高的側壁 TWI 盛行率」），**數字未採用**。
- **2026 ACC 反對立法強制 ECG 篩檢**（JACC 2025, doi:10.1016/j.jacc.2025.10.015）：與文章 FAQ「美國認為加做 ECG 合理」不衝突，可考慮於 FAQ 補一句，非必要。
- 文章「平均追蹤 9 年」（Pelliccia）：OE 回答未逐字確認追蹤年數，但未提出異議；維持原文。

## frontmatter

因有建議修改，**未**將 `verification_pending` 改為 `false`，`last_verified` 亦不變；待使用者核准、zh/en 同步修改後再更新。
