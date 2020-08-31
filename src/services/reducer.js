import {GET_CATEGORY} from './actions';

const handlers = {
  [GET_CATEGORY]: (state, {payload}) => ({...state, data: payload}),
  DEFAULT: state => state,
};

export const ActionReducer = (state, action) => {
  
  const handler = handlers[action.type] 
                ||
                  handlers.DEFAULT;

  return handler(state, action);

};