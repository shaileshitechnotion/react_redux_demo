import {  
    combineReducers
  } from 'redux';
  


export const name = (state = {}, action) => {  
    switch (action.type) {
      case 'ADD_NAME':
        return action.name;
      case 'GET_NAME':
        return action.gname;
      default:
        return state;
    }
  };
  
  export const reducers = combineReducers({  
    name
  });

  export default reducers;