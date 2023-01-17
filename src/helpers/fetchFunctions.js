export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const api = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(api);
  const result = await response.json();
  return result;
};

export const fetchProductsList = async (item) => {
  if (!item) {
    throw new Error('Termo de busca não informado');
  }
  const API = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  const response = await fetch(API);
  const result = await response.json();
  return result.results;
};
