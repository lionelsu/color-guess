const colorBalls = document.querySelectorAll('.ball');

// Função para gerar um número aleatório entre 0 e 255
const rdnRGB = () => Math.floor(Math.random() * 255);

// Função para gerar e concatenar um rgb(n, n, n)
const genRGB = () => `rgb(${rdnRGB()},${rdnRGB()},${rdnRGB()})`;

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
applyRdnColor(colorBalls);
