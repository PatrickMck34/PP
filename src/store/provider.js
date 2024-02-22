import { createStore } from 'redux';
import { csrfFetch } from './csrf';
const CREATE_PROVIDER = "/provider/create"
const READ_PROVIDERS = "/providers"
export const createProvider = (provider) => async (dispatch) => {
  const { name, address, phone, zipCode,domesticViolence,
    LGBTQ,
    crisisResources,
    humanTrafficking,
    military,
    police,
    maleSurvivor,
    childSurvivor,confidential,
    nonConfidential,
    healthCenter,
    dvProgram,
    psychProgram,
    callPolice,
    advocacyProgram  } = provider;
    const data = await fetch('/provider', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, address, phone, zipCode,domesticViolence,
        LGBTQ,
        crisisResources,
        humanTrafficking,
        military,
        police,
        maleSurvivor,
        childSurvivor,confidential,
        nonConfidential,
        healthCenter,
        dvProgram,
        psychProgram,
        callPolice,
        advocacyProgram
      }),
    });
    const response = await data.json();
    dispatch(createProviders(response));
    return response
  }
  export const createProviders = (provider) => ({
    type: 'CREATE_PROVIDER',
    payload: provider,
  })
  export const getProvider = (spotId) => async (dispatch) => {
    const data = await csrfFetch(`/providers`)
        const response = await data.json()
        dispatch(getProviders(response))
        return response
    }
    export const getProviders = (rev) =>({
        type: READ_PROVIDERS,
        payload: rev
    })

const initialState = {
  allProvider: {},
  provider: {},
  provider2: {},
};

export const providerReducer=(state = initialState, action)=> {
  let newState;
  switch (action.type) {
    case CREATE_PROVIDER:
                 newState = { allProvider:{...state.allProvider}} 
                newState.allProvider[action.payload.id] = action.payload
                return newState
                case READ_PROVIDERS:
             
                 newState = { allProvider:{...state.allProvider}}
                return newState
    case 'SET_PROVIDER':
      return { ...state, provider: action.payload };
    case 'SET_PROVIDER2':
      return { ...state, provider2: action.payload };
      case 'SET_ZIP':
      return { ...state, zipCode: action.payload };
      case 'SET_NAME':
      return { ...state, name: action.payload };
      case 'SET_ADDRESS':
      return { ...state, address: action.payload };
      case 'SET_PHONE':
      return { ...state, phone: action.payload };
    default:
      return state;
  }
}
export default providerReducer