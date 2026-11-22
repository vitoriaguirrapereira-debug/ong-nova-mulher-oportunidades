# Plano: confirmar e corrigir o estado do protótipo (logo, build, tutorial)

## Contexto
O pedido não traz uma tarefa nova. Ele descreve o estado atual e diz que ainda não confirmou visualmente a troca do logo, o `pnpm build` nem o tutorial de primeira visita. Este plano verifica esses três pontos e corrige o que falhar.

## Achados (somente leitura)
- `src/assets/logo.png` existe (1095x261, PNG RGBA). É o novo wordmark em verde-limão, com o ícone de elos e o texto "CONECTANDO OPORTUNIDADES".
- O logo é carregado por caminho absoluto em string, sem `import`:
  - `src/screens/SplashScreen.tsx:22` usa `src="/src/assets/logo.png"`
  - `src/screens/HomeScreen.tsx:54` usa o mesmo caminho
  - Funciona no servidor de dev. No build de produção o Vite não empacota nem reescreve esse caminho, então o logo provavelmente quebra no app publicado.
- A chave do tutorial `conectando-oportunidades:tutorial-concluido` está em `src/App.tsx:23`. `src/components/FirstVisitTutorial.tsx` e `src/data/opportunities.ts` existem.
- O verde-limão do logo fica legível sobre o gradiente teal do Splash. Falta checar o contraste no cabeçalho da Home (`HomeScreen.tsx` ~linha 54), caso o fundo ali seja claro.

## Passos
1. Em `SplashScreen.tsx` e `HomeScreen.tsx`, trocar o caminho em string por `import logo from '../assets/logo.png'` e usar `src={logo}`. É a única mudança de código esperada.
2. Rodar `pnpm build` e conferir que o PNG sai em `dist/assets`. Se o build falhar, corrigir só o erro apontado.
3. Conferir o contraste do logo no cabeçalho da Home. Se o fundo for claro, dar a esse cabeçalho um fundo teal escuro (`#0f766e`) ou usar uma versão do logo em teal. Não mexer no resto do layout.
4. Tutorial: ler `FirstVisitTutorial.tsx` e a lógica em `App.tsx` (ler e gravar o `localStorage`, tratar falha com try/catch). Confirmar que ele aparece só na primeira visita e some depois de concluído ou pulado.
5. Dados: abrir `opportunities.ts` e confirmar 12 cursos, 8 oficinas e 3 tutoriais, cada um com URL oficial.

## Verificação
- `pnpm build` sem erros. Depois `pnpm preview` e conferir no navegador que o logo aparece no Splash e na Home.
- Limpar o `localStorage`, recarregar e ver o tutorial aparecer. Concluir, recarregar e ver que ele não volta.
- Em Explorar, buscar um termo com acento (ex.: "informatica") e abrir um link oficial.
