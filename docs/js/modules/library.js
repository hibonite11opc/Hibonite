(function(HB){HB.library=function(){
 document.getElementById('libList').innerHTML=HB.data.games.filter(g=>g.owned).map((g,i)=>
 `<li class="row facet" data-reveal style="--i:${i};--h:${g.h};--p:${g.pct/100}"><div class="cover thumb"></div>
  <div><h3>${g.title}</h3><p>${g.genre}, ${g.hours} hours played</p><div class="track"><i></i></div></div>
  <b class="pct">${g.pct}%</b><button class="btn btn--play" data-magnet>Play</button></li>`).join('');
};})(window.HB=window.HB||{});
