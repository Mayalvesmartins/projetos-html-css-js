## Entrega IV — Versionamento, Acessibilidade e Deploy

### Versionamento (Git/GitHub)
- Estratégia: GitFlow (branches `main`, `develop`, `feature/*`, `release/*`, `hotfix/*`)
- Mensagens semânticas: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`
- Releases: usar tags SemVer (ex: `v1.1.0`)

### Acessibilidade (WCAG 2.1 AA)
- Navegação por teclado implementada (skip link, foco visível)
- Estrutura semântica e ARIA onde necessário
- Contraste mínimo 4.5:1 (testado)
- Modo escuro e alto contraste disponíveis
- Script de acessibilidade: `src/js/accessibility.js`

### Otimização para produção
- Minificação via `npm run build` (CSS/JS/HTML)
- GitHub Actions para build e deploy
- Instruções locais:
  1. `npm ci`
  2. `npm run build`
  3. `npm run start`  (testar localmente)

### Entregáveis
- Repositório público com histórico de commits semântico
- Pull requests e issues documentados (templates incluídos)
- README, CHANGELOG e checklist de acessibilidade
- Deploy em produção (GitHub Pages) via workflow CI/CD


