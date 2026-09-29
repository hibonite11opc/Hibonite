/* Entry point: split hero title, render views, then wire behaviours. */
(function(HB){
 const h1=document.querySelector('.hero h1');let n=0;
 h1.setAttribute('aria-label',h1.textContent);
 h1.innerHTML=h1.textContent.split(' ').map(w=>`<span class="w" aria-hidden="true">${[...w].map(c=>`<span style="--i:${n++}">${c}</span>`).join('')}</span>`).join(' ');
 ['cursor','store','library','concepts','reveal','tilt','nav'].forEach(k=>HB[k]());
})(window.HB);
