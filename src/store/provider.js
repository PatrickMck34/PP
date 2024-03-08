import { createStore } from 'redux';
import { csrfFetch } from './csrf';
import {useSelector} from "react-redux"
const CREATE_PROVIDER = "/provider/create"
const READ_PROVIDERS = "/providers"
const SET_PROVIDERS = 'session/SET_PROVIDERS';

export const createProvider = (provider) => async (dispatch) => {
  // const Users = useSelector(state => state.session.user.id)
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
    const data = await csrfFetch('/api/provider', {
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
  export const getProviders = (userId) => async (dispatch) => {
    const response = await fetch(`/api/providers/${userId}`);
  
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
  allProvider: {},
  provider: {},
  provider2: {},
};

export const providerReducer=(state = initialState, action)=> {
  let newState;
  switch (action.type) {
    case CREATE_PROVIDER:
                 newState = { provider:{...state.provider}} 
                newState.provider[action.payload.id] = action.payload
                return newState
                case READ_PROVIDERS:
             
                 newState = { ...state, allProvider:{...state.allProvider}}
                 newState[action.payload.provider[0].id] = action.payload.provider[0]
                return newState
                case SET_PROVIDERS:
      return { ...state, providers: action.providers };
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