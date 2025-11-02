
window.TEMPLATES = window.TEMPLATES || {};
window.TEMPLATES.home = `
<div class="hero" style="display:flex;align-items:center;gap:var(--space-4);padding:var(--space-4);background:linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3));border-radius:16px;opacity:0;transition:opacity .35s;">
  <div class="hero-text">
    <h2 style="font-size:var(--font-size-xl);margin:0 0 var(--space-2)">Juntos podemos fazer a diferença</h2>
    <p class="muted">Trabalhamos em prol de um mundo mais justo e solidário, promovendo ações que transformam vidas.</p>
    <p style="margin-top:var(--space-3)">
      <button class="btn" data-link="projetos">Conheça os projetos</button>
    </p>
  </div>
  <div style="flex:1">
    <img src="img/projetos/projeto_8.png" alt="Projeto destaque" style="width:100%;border-radius:12px;box-shadow:var(--shadow-1)">
  </div>
</div>

<section style="margin-top:var(--space-4)">
  <h3>Projetos recentes</h3>
  <div class="projects-grid" style="margin-top:var(--space-2)">
    <article class="card">
      <img src="img/projetos/projeto_1.png" alt="Projeto 1">
      <div class="card-body">
        <h4 class="card-title">Clínica Comunitária</h4>
        <p class="card-desc">Atendimentos gratuitos e oficinas de saúde preventiva.</p>
        <div style="margin-top:var(--space-2)"><span class="badge">Saúde</span> <button class="btn" data-link="projetos">Ver</button></div>
      </div>
    </article>

    <article class="card">
      <img src="img/projetos/projeto_2.png" alt="Projeto 2">
      <div class="card-body">
        <h4 class="card-title">Apoio Escolar</h4>
        <p class="card-desc">Reforço escolar e atividades de leitura para crianças.</p>
        <div style="margin-top:var(--space-2)"><span class="badge">Educação</span> <button class="btn" data-link="projetos">Ver</button></div>
      </div>
    </article>

    <article class="card">
      <img src="img/projetos/projeto_3.png" alt="Projeto 3">
      <div class="card-body">
        <h4 class="card-title">Hortas Comunitárias</h4>
        <p class="card-desc">Incentivo à produção local e alimentação saudável.</p>
        <div style="margin-top:var(--space-2)"><span class="badge">Meio Ambiente</span> <button class="btn" data-link="projetos">Ver</button></div>
      </div>
    </article>
  </div>
</section>

<section style="margin-top:var(--space-4)">
  <h3>Equipe</h3>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-3);margin-top:var(--space-2)">
    <div class="card"><img src="img/equipe/membro_1.png" alt=""><div class="card-body"><strong>Joana</strong><p class="card-desc">Coordenadora</p></div></div>
    <div class="card"><img src="img/equipe/membro_2.png" alt=""><div class="card-body"><strong>Marcos</strong><p class="card-desc">Voluntário</p></div></div>
    <div class="card"><img src="img/equipe/membro_3.png" alt=""><div class="card-body"><strong>Ana</strong><p class="card-desc">Comunicação</p></div></div>
  </div>
</section>
`;

window.TEMPLATES.sobre = `
<section style="background:var(--color-white);padding:var(--space-4);border-radius:12px;box-shadow:var(--shadow-1);opacity:0;transition:opacity .35s;">
  <h2>Sobre a ONG</h2>
  <p>Fundada em 2025, a SolidariedadeONG atua em diversas frentes sociais, priorizando ações educacionais e de saúde para comunidades vulneráveis.</p>
  <h3>Missão</h3>
  <p>Promover inclusão social por meio de projetos colaborativos de gratuitos, com participação comunitária.</p>
  <h3>Visão</h3>
  <p>Ser referência local em ações sustentáveis e educação comunitária.</p>
</section>
`;

window.TEMPLATES.projetos = `
<section style="opacity:0;transition:opacity .35s;">
  <h2>Projetos</h2>
  <div class="projects-grid" style="margin-top:var(--space-2)">
    <article class="card"><img src="img/projetos/projeto_1.png"><div class="card-body"><h4 class="card-title">Clínica Comunitária</h4><p class="card-desc">Atendimentos gratuitos.</p></div></article>
    <article class="card"><img src="img/projetos/projeto_2.png"><div class="card-body"><h4 class="card-title">Apoio Escolar</h4><p class="card-desc">Reforço escolar.</p></div></article>
    <article class="card"><img src="img/projetos/projeto_3.png"><div class="card-body"><h4 class="card-title">Hortas</h4><p class="card-desc">Hortas comunitárias.</p></div></article>
  </div>
</section>
`;

window.TEMPLATES.contato = `
<section style="background:var(--color-white);padding:var(--space-4);border-radius:12px;box-shadow:var(--shadow-1);opacity:0;transition:opacity .35s;">
  <h2>Contato</h2>
  <form id="contact-form" novalidate>
    <div class="form-row">
      <div style="flex:1"><label for="name">Nome</label><input class="input" id="name" name="name" required></div>
      <div style="flex:1"><label for="email">E-mail</label><input class="input" id="email" name="email" type="email" required></div>
    </div>
    <div style="margin-top:var(--space-2)"><label for="message">Mensagem</label><textarea id="message" class="input" name="message" rows="6" required></textarea></div>
    <div style="margin-top:var(--space-2)"><button class="btn" type="submit">Enviar</button></div>
  </form>
</section>
`;

window.TEMPLATES.doacoes = `
<section style="background:var(--color-white);padding:var(--space-4);border-radius:12px;box-shadow:var(--shadow-1);opacity:0;transition:opacity .35s;">
  <h2>Doações</h2>
  <p class="muted">Sua contribuição faz a diferença. Escolha uma forma de doar abaixo.</p>
  <div style="display:flex;gap:var(--space-3);flex-wrap:wrap;margin-top:var(--space-2)">
    <div class="card" style="flex:1;min-width:220px;">
      <div class="card-body">
        <h4 class="card-title">Doação única</h4>
        <p class="card-desc">Valor único para apoiar projetos.</p>
        <button class="btn" id="donate-once">Doar agora</button>
      </div>
    </div>
    <div class="card" style="flex:1;min-width:220px;">
      <div class="card-body">
        <h4 class="card-title">Doação mensal</h4>
        <p class="card-desc">Contribua mensalmente para manter ações contínuas.</p>
        <button class="btn" id="donate-monthly">Assinar doação</button>
      </div>
    </div>
  </div>
</section>
`;
