// Javascript mínimo para interacción
document.addEventListener('DOMContentLoaded',function(){
  // Volver arriba - añadimos un botón dinámico si es necesario
  const btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.textContent = '↑';
  btn.style.position = 'fixed';
  btn.style.right = '18px';
  btn.style.bottom = '18px';
  btn.style.padding = '10px 12px';
  btn.style.borderRadius = '8px';
  btn.style.border = 'none';
  btn.style.background = 'rgba(255,255,255,0.08)';
  btn.style.color = '#fff';
  btn.style.cursor = 'pointer';
  btn.style.display = 'none';
  document.body.appendChild(btn);
  btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  window.addEventListener('scroll',()=>{
    if(window.scrollY>300) btn.style.display='block'; else btn.style.display='none';
  });
});
