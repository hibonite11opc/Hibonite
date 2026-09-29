(function(HB){HB.concepts=function(){
 const list=HB.data.concepts,n=Math.max(3,list.length);let html='';
 for(let i=0;i<n;i++){const c=list[i];
  html+=c?`<li data-reveal style="--i:${i}"><a href="#" class="card facet" data-tilt style="--h:${c.h||200}"><div class="cover"></div><div class="card__body"><h3>${c.title}</h3><p>${c.status||'In concept'}</p></div></a></li>`
  :`<li data-reveal style="--i:${i}"><div class="card facet slot" data-tilt><div class="slot__g"></div><h3>Open slot</h3><p>Concept games will appear here.</p></div></li>`}
 document.getElementById('conceptGrid').innerHTML=html;
};})(window.HB=window.HB||{});
