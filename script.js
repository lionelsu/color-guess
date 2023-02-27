// Seletores de elementos
const colorBalls = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');
const rgbQuestion = document.querySelector('#rgb-color');
const resetBtn = document.querySelector('#reset-game');

// Função para gerar um número aleatório entre 0 e 255
// maxValue como parâmetro para reutilizar a função, no caso, será 255 ou o .length do const colorBalls
const rdnRGB = (maxValue) => Math.floor(Math.random() * maxValue);

// Função para gerar e concatenar um rgb(n, n, n)
const genRGB = () => `rgb(${rdnRGB(255)},${rdnRGB(255)},${rdnRGB(255)})`;

// Função para gerar a cor aleatória nos circulos
function applyRdnColor(nodeList) {
  nodeList.forEach((node) => {
    const element = node;
    element.style.backgroundColor = genRGB();
  });
  // for (let i = 0; i < colorBalls.length; i += 1) {
  //   colorBalls[i].style.backgroundColor = genRGB();
  // }
}

// Função para retornar uma das cores aleatórias geradas e renderizar apenas o seu código rgb no paragrafo. Esta cor é a cor que deve ser adivinhada.
function getTargetBall() {
  const indexBall = Math.floor(Math.random() * colorBalls.length);
  const targetBall = colorBalls[indexBall].style.backgroundColor;
  return targetBall;
}

// Função usada para aplicar as cores aleatórias e aplicar a cor a ser advinhada no HTML
const applyColorBalls = () => {
  applyRdnColor(colorBalls);
  rgbQuestion.innerText = getTargetBall();
};

// Função de inilialização de novo jogo, será usada para iniciar e resetar
function newGame() {
  answer.textContent = 'Escolha uma cor';
  applyColorBalls();
}

// função responsavel por exibir a mensagem caso acerte ou erre, esta função será chamada no nosso inicializador.
function tryCorrectBall(ball) {
  const isTheBall = ball.style.backgroundColor;
  const correctBall = rgbQuestion.textContent;

  if (isTheBall === correctBall) {
    answer.textContent = 'Acertou!';
  } else {
    answer.textContent = 'Errou! Tente novamente!';
  }
}

// Função com responsabilidade de iniciar as outras funções.
function init() {
  newGame();
  colorBalls.forEach((ball) => {
    ball.addEventListener('click', () => tryCorrectBall(ball));
  });
  resetBtn.addEventListener('click', newGame);
}
init();
