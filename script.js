const texts = [
  `Meu bem,\nFeliz dia dos namorados! ❤️💕\n\n Obrigado por ser tão bom para mim...`,
  `Eu espero que mais anos se passem e que eu continue ao seu lado sempre.`,
  `"Você me falou o seu amor no meu ouvido \n Sem pedir de volta uma resposta, garantia ou coisa assim \n Tão diferente de mim, tão longe das explosões \nSem preocupar com os dias que virão."`
];

let current = 0;

function nextText() {
  current = (current + 1) % texts.length;
  document.getElementById("text").innerText = texts[current];
}

const container = document.getElementById('heart-container');

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-fall');

    const img = document.createElement('img');
    img.src = './coracaoazul.png'; // Caminho para seu coração PNG
    img.style.width = 50 + Math.random() * 50 + 'px';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 3 + Math.random() * 2 + 's';

    heart.appendChild(img);
    container.appendChild(heart);

    // Remove após 5 segundos
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 300);