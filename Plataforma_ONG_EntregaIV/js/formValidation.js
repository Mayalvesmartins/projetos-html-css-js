
window.PageInit = window.PageInit || {};
window.PageInit.init = function(){
  // bind contact form if present
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      let valid = true;
      ['name','email','message'].forEach(id=>{
        const el = document.getElementById(id);
        if(!el || !el.value.trim()){ if(el) el.style.borderColor='red'; valid=false; } else { if(el) el.style.borderColor=''; }
      });
      if(!valid){
        showToast('Por favor preencha todos os campos corretamente.', 'error');
        return;
      }
      const data = {name:form.name.value,email:form.email.value,message:form.message.value, date: new Date().toISOString()};
      const list = JSON.parse(localStorage.getItem('contactMessages')||'[]');
      list.push(data);
      localStorage.setItem('contactMessages', JSON.stringify(list));
      showToast('Mensagem enviada com sucesso! Seus dados foram salvos localmente.', 'success');
      form.reset();
    });
  }
  // donation buttons
  const donateOnce = document.getElementById('donate-once');
  const donateMonthly = document.getElementById('donate-monthly');
  if(donateOnce) donateOnce.addEventListener('click', function(){ showModal('Obrigado! Você será redirecionado para o processo de doação.'); });
  if(donateMonthly) donateMonthly.addEventListener('click', function(){ showModal('Obrigado por considerar uma doação mensal!'); });
};
function showModal(message){
  const root = document.createElement('div');
  root.className = 'modal-backdrop';
  root.style.display = 'flex';
  root.innerHTML = '<div class="modal"><button class="modal-close" style="float:right">✕</button><div style="padding:8px 0"><p>'+message+'</p></div></div>';
  document.body.appendChild(root);
  root.querySelector('.modal-close').addEventListener('click', function(){ root.remove(); });
  setTimeout(()=>{ try{ root.remove(); }catch(e){} }, 4000);
}
function showToast(message, type){
  let t = document.getElementById('site-toast');
  if(!t){
    t = document.createElement('div');
    t.id = 'site-toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = message;
  t.style.display = 'block';
  setTimeout(()=>{ t.style.display = 'none'; }, 3000);
}
