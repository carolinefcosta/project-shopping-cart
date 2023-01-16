export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (item) => {
  const API = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  try {
    const response = await fetch(API);
    const result = await response.json();
    return result.results;
  } catch (error) {
    throw new Error('Termo de busca não informado');
  }
};
