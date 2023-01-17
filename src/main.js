import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const sectionProducts = document.getElementsByClassName('products')[0];

document.querySelector('.cep-button').addEventListener('click', searchCep);

const carregando = async () => {
  const h2 = document.createElement('h2');
  h2.className = 'loading';
  h2.innerText = 'carregando...';
  sectionProducts.appendChild(h2);
};

const functionError = (error) => {
  const h2 = document.querySelector('.loading');
  if (!error) {
    sectionProducts.removeChild(h2);
  } else {
    h2.className = 'error';
    h2.innerText = 'Algum erro ocorreu, recarregue a paǵina e tente novamente';
  }
};

const adicionandoProdutos = async (itens) => {
  itens.forEach((produto) => {
    const produtoInd = createProductElement(produto);
    sectionProducts.appendChild(produtoInd);
  });
};

try {
  const produtos = await fetchProductsList('computador');
  adicionandoProdutos(produtos);
} catch (error) {
  functionError(error);
}
