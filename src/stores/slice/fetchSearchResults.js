export const fetchSearchResults = (query) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:5000/product`);
        const results = await response.json();
        dispatch({ type: 'SEARCH_PRODUCTS_SUCCESS', results });
      } catch (error) {
        console.error(error);
      }
    };
  };