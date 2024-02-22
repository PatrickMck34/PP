import { createStore } from 'redux';

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



