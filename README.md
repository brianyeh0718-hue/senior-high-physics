# 高中物理互動教學網

網址：https://brianyeh0718-hue.github.io/senior-high-physics/

教科書：龍騰版。每一章包含 NotebookLM 簡報輪播、互動視覺化、隨堂評量、資訊圖表、教學影片，以及抽籤、計時器、畫筆等課堂工具。

## 結構

```
index.html            網站首頁（依 data/chapters.js 自動列出冊別與章節）
data/chapters.js      ★ 目錄資料：新增或上線章節時改這裡
data/render.js        產生章節卡片
data/site.css         首頁、冊別目錄共用樣式
elective1/index.html  選修物理 I 目錄
elective1/ch2/        第二章 直線運動（index.html + assets/）
```

網址規則：`https://brianyeh0718-hue.github.io/senior-high-physics/<冊別id>/ch<N>/`

## 新增章節

1. 把單元資料夾的 `05_教學網頁/*` 複製到 `<冊別id>/ch<N>/`。
2. 章節網頁導覽列最前面要有回到冊別目錄的連結 `<a href="../">`。
3. 在 `data/chapters.js` 加入該章（`ready: true`、`desc`、`cover`）；新冊別要新增一筆 book，並複製一份冊別目錄 `index.html`（最後一行改 `renderBooks(..., '<冊別id>')`）。
4. commit、push，等 GitHub Pages 建置完成（約 1 分鐘）。

## 注意

- 影片放 YouTube 再嵌入，不要把 MP4 放進倉庫（單檔 100 MB 上限）。
- 備課文件、PDF、PPTX 留在本機，不放進這個公開倉庫。
- 修改網站時改這個倉庫裡的檔案。
