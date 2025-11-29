const imagens = [
    '/content/image/slide1/BANNER-ESFOLIANTE-LABOTRAT.webp',
    '/content/image/slide1/BANNER-NATAL-SITE-2-1536x400.webp',
    '/content/image/slide1/banner-segundo.jpg',
    '/content/image/slide1/BANNER-SITE-AMORA-CACHOS-4-1536x400.webp',
    '/content/image/slide1/BANNER-SITE-HIDRATACAO-AMORA-1920x500-2-768x200.webp',
    '/content/image/slide1/BANNER-SITE-MAKE-3.webp',
]

let index = 0;

const slide = document.getElementById('slide');

function mudarImagem() {
    slide.classList.remove("aparecer");

    setTimeout(() => {
        slide.src = imagens[index];
        slide.classList.add("aparecer");
    }, 500);

    index++;
    if (index >= imagens.length) {
        index = 0;
    }
}

// Começar da primeira imagem
mudarImagem();

// Trocar a cada 3 segundos
setInterval(mudarImagem, 3000);