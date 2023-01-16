import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    fetchProductsList('computador');
    await expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o result correto ao executar fetchProductsList', async () => {
    fetchProductsList('computador');
    const result = ('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    await expect(fetch).toHaveBeenCalledWith(result);
  });

  it('Teste se o retorno da função fetchProductsList com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const response = await fetchProductsList('computador');
    expect(response).toEqual(computadorSearch);
  });

  it('Teste se, ao chamar a função fetchProductsList sem argumento, retorna um erro.', async () => {
    await expect(fetchProductsList()).rejects.toEqual(new Error('Termo de busca não informado'));
  });
});
