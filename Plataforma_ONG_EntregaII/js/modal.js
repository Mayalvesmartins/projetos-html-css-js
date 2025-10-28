document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('[data-modal-target]').forEach(btn=>{
    btn.addEventListener('click', function(){
      const id = btn.getAttribute('data-modal-target');
      const modalRoot = document.getElementById(id);
      if(modalRoot) modalRoot.style.display = 'flex';
    });
  });
  document.querySelectorAll('.modal-close').forEach(btn=>{
    btn.addEventListener('click', function(){ btn.closest('.modal-backdrop').style.display = 'none'; });
  });
});