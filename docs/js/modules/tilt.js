(function(HB){HB.tilt=function(){
 if(!matchMedia('(hover:hover)').matches)return;
 document.querySelectorAll('[data-tilt]').forEach(el=>{
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height,s=el.style;
   s.setProperty('--ry',((x-.5)*14).toFixed(2)+'deg');s.setProperty('--rx',((.5-y)*14).toFixed(2)+'deg');
   s.setProperty('--mx',x*100+'%');s.setProperty('--my',y*100+'%');s.setProperty('--u',x)});
  el.addEventListener('pointerleave',()=>{el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg')});
 });
 document.querySelectorAll('[data-magnet]').forEach(b=>{
  b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();
   b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});
  b.addEventListener('pointerleave',()=>b.style.transform='');
 });
};})(window.HB=window.HB||{});
