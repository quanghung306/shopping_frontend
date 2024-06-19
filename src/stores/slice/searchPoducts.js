export const searchProducts = (query) => {
    return {
      type: 'SEARCH_PRODUCTS',
      query,
    };
  };