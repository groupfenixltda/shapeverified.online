// Seleciona os elementos do DOM
const menuBtn = document.getElementById('menu-btn');
const menuMobile = document.getElementById('menu-mobile');
const menuLinks = document.querySelectorAll('.menu-mobile a');

// Adiciona o evento de clique ao botão hamburger
menuBtn.addEventListener('click', () => {
    // Alterna a classe 'hidden' no menu mobile
    menuMobile.classList.toggle('hidden');
});

// Fecha o menu ao clicar em um de seus links
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.add('hidden');
    });
});