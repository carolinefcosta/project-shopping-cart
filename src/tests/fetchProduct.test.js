import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProduct', async () => {
    fetchProduct('MLB1405519561');
    await expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o result correto ao executar fetchProduct', async () => {
    fetchProduct('MLB1405519561');
    const result = ('https://api.mercadolibre.com/items/MLB1405519561');
    await expect(fetch).toHaveBeenCalledWith(result);
  });

  it('Teste se o retorno da função fetchProduct com o argumento computador é uma estrutura de dados igual ao objeto produto', async () => {
    const response = await fetchProduct('MLB1405519561');
    expect(response).toEqual(product);
  });

  it('Teste se, ao chamar a função fetchProduct sem argumento, retorna um erro.', async () => {
    await expect(fetchProduct()).rejects.toEqual(new Error('ID não informado'));
  });
});
