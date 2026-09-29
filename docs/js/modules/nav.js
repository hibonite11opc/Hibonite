(function(HB){HB.nav=function(){
 const tabs=[...document.querySelectorAll('.tabs a')],ink=document.querySelector('.tabs__ink'),bar=document.getElementById('progress'),hero=document.querySelector('.hero');
 const place=a=>{ink.style.width=a.offsetWidth+'px';ink.style.transform=`translateX(${a.offsetLeft}px)`};
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;
  const a=tabs.find(t=>t.hash==='#'+e.target.id);tabs.forEach(t=>t.classList.toggle('on',t===a));place(a)}),{rootMargin:'-45% 0px -50% 0px'});
 document.querySelectorAll('main>section').forEach(s=>io.observe(s));
 addEventListener('resize',()=>place(tabs.find(t=>t.classList.contains('on'))||tabs[0]));
 const tick=()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
  bar.style.transform=`scaleX(${h>0?y/h:0})`;document.body.classList.toggle('scrolled',y>20);hero.style.setProperty('--sy',Math.min(y,900))};
 addEventListener('scroll',tick,{passive:true});tick();place(tabs[0]);
 hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();
  hero.style.setProperty('--px',(e.clientX-r.left)/r.width-.5);hero.style.setProperty('--py',(e.clientY-r.top)/r.height-.5)});
};})(window.HB=window.HB||{});
