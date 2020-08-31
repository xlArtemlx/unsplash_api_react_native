import React from 'react';
import {Image, StyleSheet} from 'react-native';





export const FullImg = (props) => {


  const img = props.route.params.item.urls.full

  return (
      <Image
        style={styles.image}
        source={
          {uri: img}
        }
      /> 
  );


};




const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },

});

