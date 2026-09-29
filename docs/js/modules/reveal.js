(function(HB){
 const count=el=>{const to=+el.dataset.count,t0=performance.now();
  (function f(t){const p=Math.min((t-t0)/1400,1);el.textContent=Math.round(to*(1-Math.pow(1-p,4)));p<1&&requestAnimationFrame(f)})(t0)};
 HB.reveal=function(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;
   e.target.classList.add('in');e.target.querySelectorAll('[data-count]').forEach(count);io.unobserve(e.target)}),{threshold:.15});
  document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));
 };
})(window.HB=window.HB||{});
