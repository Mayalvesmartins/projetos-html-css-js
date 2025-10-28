// main.js - masks and basic form behavior (no external libs)
document.addEventListener('DOMContentLoaded', function(){
  // populate years
  document.getElementById('year')?.textContent = new Date().getFullYear();
  document.getElementById('year-projects')?.textContent = new Date().getFullYear();
  document.getElementById('year-cadastro')?.textContent = new Date().getFullYear();

  // masks
  function maskCPF(v){ return v.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2').slice(0,14); }
  function maskTel(v){ v = v.replace(/\D/g,''); if(v.length>10) return v.replace(/(\d{2})(\d{5})(\d{4}).*/,'($1) $2-$3'); return v.replace(/(\d{2})(\d{4})(\d{0,4}).*/,'($1) $2-$3'); }
  function maskCEP(v){ return v.replace(/\D/g,'').replace(/(\d{5})(\d{1,3})/,'$1-$2').slice(0,9); }

  var cpf = document.getElementById('cpf');
  if(cpf) cpf.addEventListener('input', function(){ this.value = maskCPF(this.value); });

  var tel = document.getElementById('telefone');
  if(tel) tel.addEventListener('input', function(){ this.value = maskTel(this.value); });

  var cep = document.getElementById('cep');
  if(cep) cep.addEventListener('input', function(){ this.value = maskCEP(this.value); });

  // simple submit handler to show a summary instead of real submit
  var form = document.getElementById('cadastroForm');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        e.preventDefault();
        form.querySelector(':invalid')?.focus();
        return;
      }
      e.preventDefault();
      // simulate successful submit - show accessible alert
      var summary = document.getElementById('formSummary');
      summary.innerHTML = '<strong>Cadastro recebido.</strong> Obrigado por se inscrever!';
      summary.setAttribute('role','status');
      form.reset();
    });
  }

  // Optional: placeholder for CEP lookup (ViaCEP integration)
  // You can implement a fetch to https://viacep.com.br/ws/{cep}/json/ and auto-fill address fields.
});
