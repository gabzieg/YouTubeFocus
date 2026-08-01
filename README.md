# YouTube Focus 🎯

**YouTube Focus** é uma extensão para navegadores baseados em Chromium que remove distrações do YouTube: Shorts, recomendações da home e força a página de inscrições como ponto de partida.

*"Seu tempo não é negociável. Foco no que importa."*

## 🚀 Funcionalidades

- **Bloqueio de Shorts:** Oculta prateleiras, itens individuais e botões de menu que levam a `/shorts/`.
- **Redirecionamento forçado:** Home (`/`) e qualquer tentativa de navegação pra Shorts são redirecionadas pra `/feed/subscriptions` — inclusive clique no logotipo.
- **Painel de controle:** Popup com toggle pra ativar/desativar o redirecionamento sem precisar desabilitar a extensão inteira.

## 🛠️ Tecnologias Utilizadas

- **JavaScript (Vanilla):** Content script reagindo a `yt-navigate-start` (SPA routing do YouTube) e interceptação de cliques em fase de captura.
- **CSS:** Seletores `:has()` pra ocultar Shorts disfarçados nos componentes nativos do YouTube.
- **Chrome Extension API:** Manifest V3, `storage` local pra persistir a preferência do usuário.

## 📦 Como Instalar e Testar Localmente

1. Clone ou baixe este repositório.
2. Abra `chrome://extensions/` (ou `edge://extensions/` no Edge).
3. Ative o **Modo do desenvolvedor**.
4. Clique em **Carregar sem compactação** e selecione a pasta do projeto.
5. Abra o YouTube — Shorts somem e a home redireciona pra inscrições.

## 📝 Changelog

### v1.5
- Bloqueio de Shorts expandido: cobre pesquisa, grid de vídeos e menus de navegação (antes só pegava a home e as inscrições).
- Redirecionamento agora reage ao roteador interno do YouTube (`yt-navigate-start`) em vez de checar a URL a cada 500ms.
- Interceptação de clique no logotipo e em qualquer link pra Shorts, cancelando a navegação antes do YouTube processar.
- Popup com toggle pra ligar/desligar o redirecionamento sem desativar a extensão.
- Ícones da extensão adicionados (16/32/48/128).

### v1.0
- Primeira versão: remoção de Shorts e redirecionamento básico pra inscrições via polling de URL.

## 📄 Licença

MIT — veja [LICENSE](LICENSE).
