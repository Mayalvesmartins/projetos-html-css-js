
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  btn && btn.addEventListener('click', function(){
    if(nav.style.display === 'flex'){ nav.style.display = ''; btn.setAttribute('aria-expanded','false'); }
    else { nav.style.display = 'flex'; btn.setAttribute('aria-expanded','true'); }
  });
});
