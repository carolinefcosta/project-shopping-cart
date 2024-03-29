import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const sectionProducts = document.getElementsByClassName('products')[0];

document.querySelector('.cep-button').addEventListener('click', searchCep);

const loading = () => {
  const paragrafoLoading = document.createElement('p');
  paragrafoLoading.className = 'loading';
  paragrafoLoading.innerText = 'carregando...';
  sectionProducts.appendChild(paragrafoLoading);
};

const finishLoading = () => {
  if (sectionProducts.hasChildNodes()) {
    sectionProducts.removeChild(sectionProducts.children[0]);
  }
};

const newError = () => {
  const erro = document.createElement('p');
  erro.className = 'error';
  erro.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  sectionProducts.appendChild(erro);
};

const addProducts = async () => {
  try {
    loading();
    const produtos = await fetchProductsList('computador');
    produtos.forEach((produto) => {
      const cadaItem = createProductElement(produto);
      sectionProducts.appendChild(cadaItem);
    });
    finishLoading();
  } catch (error) {
    newError();
  }
};

addProducts();
