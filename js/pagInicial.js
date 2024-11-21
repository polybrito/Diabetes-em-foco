// Seleciona as imagens e ícones do carrossel
const images = document.querySelectorAll('.carrossel img');
const icons = document.querySelectorAll('.carrossel-icones .icone');

// Adiciona eventos
icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        // Remove as classes ativas
        images.forEach(img => img.classList.remove('ativo'));
        icons.forEach(icn => icn.classList.remove('ativo'));

        // Ativa a imagem e o ícone corretos
        images[index].classList.add('ativo');
        icon.classList.add('ativo');
    });
});
