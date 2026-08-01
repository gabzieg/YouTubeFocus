document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('redirectToggle');

    // Carrega o estado atual
    chrome.storage.local.get(['redirectEnabled'], (result) => {
        // Por padrão, ativado
        if (result.redirectEnabled !== undefined) {
            toggle.checked = result.redirectEnabled;
        } else {
            toggle.checked = true;
            chrome.storage.local.set({ redirectEnabled: true });
        }
    });

    // Salva o estado ao alterar
    toggle.addEventListener('change', () => {
        chrome.storage.local.set({ redirectEnabled: toggle.checked });
    });
});
