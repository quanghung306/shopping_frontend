const initialState = {
    searchQuery: '',
    searchResults: [],
  };
  
  export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_PRODUCTS':
        return { ...state, searchQuery: action.query, searchResults: [] };
      case 'SEARCH_PRODUCTS_SUCCESS':
        return { ...state, searchResults: action.results };
      default:
        return state;
    }
  };