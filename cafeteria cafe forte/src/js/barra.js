export function barra() {
  const barraDeNavegacao = document.querySelector('.barra-de-navegacao-cell');
  const antiToque = document.querySelector('.anti-toque');
  const botaoBarra = document.querySelector('.botao-barra');
  const botaoFechar = document.querySelector('.botao-fechar');

  botaoBarra.addEventListener('click', () => {
    barraDeNavegacao.classList.toggle('removido');
    antiToque.classList.toggle('removido');
  });

  botaoFechar.addEventListener('click', () => {
    barraDeNavegacao.classList.toggle('removido');
    antiToque.classList.toggle('removido');
  });
};