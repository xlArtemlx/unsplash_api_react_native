import React, {useReducer,useState} from 'react';
import {Context} from './context';
import {ActionReducer} from './reducer';
import axios from 'axios';
import { GET_CATEGORY} from './actions';

export const ImageService = ({children}) => {

  const initialState = {
    data: [],
  };
  const [loading , setLoading] = useState(false)
  const [state, dispatch] = useReducer(ActionReducer, initialState);


  const loadImage = () => {
    axios
      .get(
        'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
        
      )
      .then(
        function(response) {
          
          dispatch({
            type: GET_CATEGORY,
            payload: response.data 
          });
          
          
        }
        
      )
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        console.log('completed');
        setLoading(true)
      });
  };


 


  const { data } = state;

  return (
    <Context.Provider
      value={{
        loading,
        data,
        loadImage
      }}>
      {children}
    </Context.Provider>
  );
};