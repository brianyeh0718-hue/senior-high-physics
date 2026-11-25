/*
  網站目錄資料：新增或上線一個章節時，只要修改這個檔案。
  - ready: true  → 首頁與冊別目錄會顯示可點選的卡片
  - ready: false → 顯示「準備中」
  - path 是相對於網站根目錄的資料夾（結尾要有 /）
  教科書為龍騰版；其他章節做到時再加入，不要先猜章名。
*/
window.SITE = {
  title: '高中物理互動教學網',
  books: [
    {
      id: 'elective1',
      title: '選修物理 I',
      grade: '高二・龍騰版',
      path: 'elective1/',
      chapters: [
        { no: '第二章', title: '直線運動', path: 'elective1/ch2/', ready: true,
          desc: '位置、位移與路徑長、速度與速率、加速度、等加速度直線運動；含運動模擬器與教學影片', cover: 'elective1/ch2/assets/slides/slide01.jpg' },
        { no: '第三章', title: '平面運動', path: 'elective1/ch3/', ready: true,
          desc: '平面運動的描述、相對運動、拋體運動、等速圓周運動；含拋體發射台、渡河模擬與教學影片', cover: 'elective1/ch3/assets/slides/slide01.jpg' }
      ]
    }
  ]
};
