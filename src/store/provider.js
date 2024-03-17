import { createStore } from 'redux';
import { csrfFetch } from './csrf';
import {useSelector} from "react-redux"
const CREATE_PROVIDER = "/provider/create"
const READ_PROVIDERS = "/providers"
const SET_PROVIDERS = 'session/SET_PROVIDERS';
const UPDATE_PROVIDER = 'session/UPDATE_PROVIDERS';

export const createProvider = (provider) => async (dispatch) => {
  // const Users = useSelector(state => state.session.user.id)
  console.log(provider)
  if (!provider) {
    console.error('Provider is undefined or null');
    return;
  }
  const { Name, Address, City, State, Phone, zipCode, Approved, domesticViolence, LGBTQ, crisisResources, humanTrafficking, military, lawEnforcement, elderSurvivor, childSurvivor, confidential, nonConfidential, healthCenter, dvProgram, psychProgram, callpolice, advocacyProgram, legalAdvice, forensicExams, generalHealth, pregnancy, housing, collegeOnCampus, title9, tribal, coalition, std, hivSupport, immigrants, blindDeaf, disabled, directCareCo, directCareMed, directCareOther, substanceAbuse, missingPersons, specialNeeds, alternativeCare } = provider;
  console.log(Approved)
 
    const data = await csrfFetch('/api/provider/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name, Address, City, State, Phone, zipCode, Approved, domesticViolence, LGBTQ, crisisResources, humanTrafficking, military, lawEnforcement, elderSurvivor, childSurvivor, confidential, nonConfidential, healthCenter, dvProgram, psychProgram, callpolice, advocacyProgram, legalAdvice, forensicExams, generalHealth, pregnancy, housing, collegeOnCampus, title9, tribal, coalition, std, hivSupport, immigrants, blindDeaf, disabled, directCareCo, directCareMed, directCareOther, substanceAbuse, missingPersons, specialNeeds, alternativeCare
      }),
    });
    const response = await data.json();
    console.log(response)
    dispatch(createProviders(response));
    return response
  }
  export const createProviders = (provider) => ({
    type: 'CREATE_PROVIDER',
    payload: provider,
  })
  export const updateProvider = ({provider}) => async (dispatch) => {
    // const Users = useSelector(state => state.session.user.id)
    const {  Name,
      id,
      Address,
      City,
      State,
      Phone,
      zipCode,
      Users,
      Approved,
      domesticViolence,
      LGBTQ,
      crisisResources,
      humanTrafficking,
      military,
      lawEnforcement,
      elderSurvivor,
      maleSurvivor,
      childSurvivor,
      confidential,
      nonConfidential,
      healthCenter,
      dvProgram,
      psychProgram,
      callpolice,
      advocacyProgram,
      legalAdvice,
      forensicExams,
      generalHealth,
      pregnancy,
      housing,
      collegeOnCampus,
      title9,
      tribal,
      coalition,
      std,
      hivSupport,
      immigrants,
      blindDeaf,
      disabled,
      directCareCo,
      directCareMed,
      directCareOther,
      substanceAbuse,
      missingPersons,
      specialNeeds,
      alternativeCare,  } = provider;
      const data = await csrfFetch(`/api/provider`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name,
          id,
          Address,
          City,
          State,
          Phone,
          zipCode,
          Approved,
          domesticViolence,
          LGBTQ,
          crisisResources,
          humanTrafficking,
          military,
          lawEnforcement,
          elderSurvivor,
          childSurvivor,
          confidential,
          nonConfidential,
          healthCenter,
          dvProgram,
          psychProgram,
          callpolice,
          advocacyProgram,
          legalAdvice,
          forensicExams,
          generalHealth,
          pregnancy,
          housing,
          collegeOnCampus,
          title9,
          tribal,
          coalition,
          std,
          hivSupport,
          immigrants,
          blindDeaf,
          disabled,
          directCareCo,
          directCareMed,
          directCareOther,
          substanceAbuse,
          missingPersons,
          specialNeeds,
          alternativeCare,
        }),
      });
      const response = await data.json();
      dispatch(updateProviders(response));
      return response
    }
    export const updateProviders = (provider) => ({
      type: 'UPDATE_PROVIDER',
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
                case UPDATE_PROVIDER:
                  newState = { ...state, provider:{...state.provider}} 
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