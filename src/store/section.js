import { createStore } from 'redux';
const READ_PROVIDERS = "/providers"
const SET_PROVIDERS = 'session/SET_PROVIDERS';

export const getProviders = (results) => async (dispatch) => {
  const response = await fetch('/api/provider', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Results': JSON.stringify(results),
    },
  });

  if (response.ok) {
    const providers = await response.json();
    dispatch(getProvider(providers));
  } else {
    // Handle error
  }
};
export const getProvider = (providers) => ({
  type: SET_PROVIDERS,
  providers,
});


const initialState = {
  section2: {},
  section3: {},
};

export const sectionReducer=(state = initialState, action)=> {
  switch (action.type) {
    case 'SET_SECTION2':
      return { ...state, section2: action.payload };
    case 'SET_SECTION3':
      return { ...state, section3: action.payload };
      case 'SET_ZIPCODE':
      return { ...state, zipCode: action.payload };
    default:
      return state;
  }
}
export default sectionReducer



