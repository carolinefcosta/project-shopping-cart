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

const addProducts = async () => {
  loading();
  const produtos = await fetchProductsList('computador');
  produtos.forEach((produto) => {
    const cadaItem = createProductElement(produto);
    sectionProducts.appendChild(cadaItem);
  });
  finishLoading();
};

addProducts();

// const loading = async () => {
//   const h2 = document.createElement('h2');
//   h2.className = 'loading';
//   h2.innerText = 'loading...';
//   sectionProducts.appendChild(h2);
// };

// const functionError = (error) => {
//   const h2 = document.getElementsByClassName('loading')[0];
//   if (!error) {
//     sectionProducts.removeChild(h2);
//   } else {
//     h2.className = 'error';
//     h2.innerText = 'Algum erro ocorreu, recarregue a paǵina e tente novamente';
//   }
// };

// const adicionandoProdutos = async (itens) => {
//   loading();
//   itens.forEach((produto) => {
//     const produtoInd = createProductElement(produto);
//     sectionProducts.appendChild(produtoInd);
//   });
// };

// try {
//   const produtos = await fetchProductsList('computador');
//   adicionandoProdutos(produtos);
// } catch (error) {
//   functionError(error);
// }
