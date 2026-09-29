(function(HB){HB.store=function(){
 const G=HB.data.games,grid=document.getElementById('storeGrid'),chips=document.getElementById('chips'),q=document.getElementById('q');
 const price=p=>p?'$'+p.toFixed(2):'Free';let genre='All';
 grid.innerHTML=G.map((g,i)=>`<li class="cell" data-reveal style="--i:${i%4}" data-genre="${g.genre}" data-t="${g.title.toLowerCase()}">
  <a href="#" class="card facet" data-tilt style="--h:${g.h}"><div class="cover"></div>
  <div class="card__body"><h3>${g.title}</h3><p>${g.genre}</p><span class="price">${g.owned?'In library':price(g.price)}</span></div></a></li>`).join('');
 chips.innerHTML=['All',...new Set(G.map(g=>g.genre))].map((c,i)=>`<button class="chip${i?'':' on'}" data-g="${c}">${c}</button>`).join('');
 const apply=()=>{let n=0;const s=q.value.trim().toLowerCase();
  grid.querySelectorAll('.cell').forEach(c=>{const ok=(genre==='All'||c.dataset.genre===genre)&&c.dataset.t.includes(s);c.hidden=!ok;
   if(ok)c.animate([{opacity:0,transform:'perspective(600px) rotateX(18deg) scale(.92)'},{opacity:1,transform:'none'}],{duration:500,delay:n++*45,easing:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'})});
  document.getElementById('empty').hidden=n>0};
 chips.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;genre=b.dataset.g;
  chips.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===b));apply()};
 q.oninput=apply;
};})(window.HB=window.HB||{});
