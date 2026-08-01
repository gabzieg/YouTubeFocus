// redirecionar.js

let isRedirectEnabled = true; // Padrão

// Carrega o estado inicial e executa a verificação
chrome.storage.local.get(['redirectEnabled'], (result) => {
    if (result.redirectEnabled !== undefined) {
        isRedirectEnabled = result.redirectEnabled;
    }
    forcarInscricoes();
});

// Escuta mudanças no storage feitas pelo popup
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.redirectEnabled !== undefined) {
        isRedirectEnabled = changes.redirectEnabled.newValue;
    }
});

// 1. Função de redirecionamento bruto
function forcarInscricoes(event) {
    if (!isRedirectEnabled) return;

    // Se o roteador interno do YouTube tentar te mandar para a home ('/') ou para um Short, ele bloqueia na hora
    if (event && event.detail && (event.detail.url === '/' || event.detail.url === '' || event.detail.url.startsWith('/shorts/'))) {
        window.location.replace("/feed/subscriptions");
        return;
    }

    // Verificação padrão da URL atual
    if (window.location.pathname === "/" || window.location.pathname === "" || window.location.pathname.startsWith("/shorts/")) {
        window.location.replace("/feed/subscriptions");
    }
}

// 2. O "Vigia": Escuta os eventos nativos de navegação do YouTube
document.addEventListener('yt-navigate-start', forcarInscricoes);

// 3. O Interceptador de Cliques: Bloqueia o clique no logotipo antes que o YouTube processe
document.addEventListener('click', (e) => {
    if (!isRedirectEnabled) return;

    const link = e.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href') || '';
    
    // Se você clicou no logo ou em qualquer link que leve para a home ou Shorts
    if (href === '/' || href.startsWith('/shorts/') || link.id === 'logo' || link.closest('#logo')) {
        e.preventDefault(); // Cancela o comportamento padrão
        e.stopPropagation(); // Impede o YouTube de ficar sabendo desse clique
        window.location.replace('/feed/subscriptions');
    }
}, true); // O 'true' faz o evento ser capturado ANTES do código do próprio YouTube