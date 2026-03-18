// redirecionar.js

// 1. Função de redirecionamento bruto
function forcarInscricoes() {
    if (window.location.pathname === "/" || window.location.pathname === "") {
        window.location.replace("/feed/subscriptions");
    }
}

// Executa assim que a página abre
forcarInscricoes();

// 2. O "Vigia": Como o YouTube não recarrega a página, precisamos vigiar as mudanças
let urlAtual = window.location.href;

setInterval(() => {
    // Se a URL tentar mudar para a home, ele bloqueia e manda para inscrições
    if (window.location.href !== urlAtual) {
        urlAtual = window.location.href;
        forcarInscricoes();
    }
    
    // 3. "Hackeia" o logotipo do YouTube
    // Procura todos os ícones do YouTube na tela e troca o destino deles
    const logos = document.querySelectorAll('a#logo');
    logos.forEach(logo => {
        if (logo.getAttribute('href') === '/') {
            logo.setAttribute('href', '/feed/subscriptions');
        }
    });
}, 500); // Verifica a cada meio segundo