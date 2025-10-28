
(function(){
  const app = document.getElementById('app');
  function setContent(html){
    app.innerHTML = html;
    // fade-in for elements that start with opacity:0
    setTimeout(()=>{
      app.querySelectorAll('[style*="opacity:0"]').forEach(el=>el.style.opacity=1);
    },20);
    // run page init if exists
    if(window.PageInit && typeof window.PageInit.init === 'function') window.PageInit.init();
  }
  function load(page){
    const content = (window.TEMPLATES && window.TEMPLATES[page]) ? window.TEMPLATES[page] : window.TEMPLATES.home;
    setContent(content);
    document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('active', a.dataset.link===page));
  }
  document.addEventListener('click', function(e){
    const link = e.target.closest('[data-link]');
    if(link){
      e.preventDefault();
      const page = link.dataset.link;
      if(page) {
        load(page==='index'?'home':page);
        history.pushState({page}, '', '#'+page);
      }
    }
  });
  window.addEventListener('popstate', function(e){
    const page = e.state?.page || location.hash.replace('#','') || 'home';
    load(page);
  });
  document.addEventListener('DOMContentLoaded', function(){ load('home'); });
})();
