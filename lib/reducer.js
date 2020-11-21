export const initialState = {
  search: '',
  filter: [],
  categories: '',
  lastUpdate: 0,
  light: false,
  count: 0,
  internship: false,
  english: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LANGUAGE':
      return {
        ...state,
        english: action.payload,
      };
    case 'CATALOG_SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    case 'CATALOG_FILTER':
      return {
        ...state,
        filter: [...state.filter, action.payload],
      };
    case 'CLEAR_ALL_FILTERS':
      return {
        ...state,
        filter: [],
        internship: false,
        english: false,
        categories: '',
      };
    case 'CATALOG_INTERNSHIP':
      return {
        ...state,
        internship: !state.internship,
      };
    case 'CATALOG_ENGLISH':
      return {
        ...state,
        english: !state.english,
      };
    case 'CLEAR_FILTER': {
      const item = state.filter.find(el => el === action.payload);
      const index = state.filter.indexOf(item);
      return {
        ...state,
        filter: [
          ...state.filter.slice(0, index),
          ...state.filter.slice(index + 1),
        ],
      };
    }
    case 'CATALOG_FILTER_CATEGORIES': {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case 'CLEAR_FILTER_CATEGORIES': {
      return {
        ...state,
        categories: '',
      };
    }
    case 'SET_CATALOG_FILTERS': {
      return {
        ...state,
        filter:
          typeof action.payload === 'string'
            ? [action.payload]
            : action.payload,
      };
    }
    default:
      return state;
  }
};
