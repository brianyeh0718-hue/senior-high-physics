/* 依 chapters.js 產生章節卡片。root：網站根目錄的相對路徑（首頁為 ''，冊別目錄為 '../'） */
function renderBooks(container, root, onlyBookId){
  var esc=function(s){var d=document.createElement('div');d.textContent=s==null?'':String(s);return d.innerHTML;};
  var html='';
  window.SITE.books.forEach(function(b){
    if(onlyBookId && b.id!==onlyBookId) return;
    var ready=b.chapters.filter(function(c){return c.ready;}).length;
    html+='<section class="book">';
    if(!onlyBookId) html+='<h2><a href="'+root+b.path+'">'+esc(b.title)+'</a><small>'+esc(b.grade)+'・已上線 '+ready+' / '+b.chapters.length+' 章</small></h2>';
    html+='<div class="grid">';
    b.chapters.forEach(function(c){
      var img=c.cover?' style="background-image:url(\''+root+c.cover+'\')"':'';
      var inner='<div class="img"'+img+'>'+(c.cover?'':(c.ready?'':'準備中'))+'</div><div class="body"><div class="no">'+esc(c.no)+(c.ready?'':'<span class="badge">準備中</span>')+'</div><div class="t">'+esc(c.title)+'</div>'+(c.desc?'<div class="d">'+esc(c.desc)+'</div>':'')+'</div>';
      html+=c.ready?'<a class="ch" href="'+root+c.path+'">'+inner+'</a>':'<div class="ch soon">'+inner+'</div>';
    });
    html+='</div></section>';
  });
  container.innerHTML=html;
}
