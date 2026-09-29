(function(HB){HB.cursor=function(){
 if(!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 const d=document.createElement('i'),r=document.createElement('i');
 d.className='cur-dot';r.className='cur-ring';document.body.append(d,r);document.body.classList.add('has-cursor');
 let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y;
 addEventListener('pointermove',e=>{x=e.clientX;y=e.clientY;d.style.transform=`translate(${x}px,${y}px)`;
  r.classList.toggle('grow',!!e.target.closest('a,button,input,[data-tilt]'))});
 (function loop(){rx+=(x-rx)*.16;ry+=(y-ry)*.16;r.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(loop)})();
};})(window.HB=window.HB||{});
