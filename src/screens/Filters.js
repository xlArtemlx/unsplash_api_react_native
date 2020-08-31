import React, {useEffect,useContext } from 'react';
import {StyleSheet,View,Text, FlatList, Image,ActivityIndicator,TouchableOpacity} from 'react-native';

import {Context} from '../services/context';

import { useNavigation } from '@react-navigation/native';


export const Filters = () => {
  const navigation = useNavigation();
  const DrinksContext = useContext(Context);
  let load =  DrinksContext.loading
  console.log(load)
 
  useEffect(() => {
    DrinksContext.loadImage();
  }, []);


  const rendersItem = ({item}) => {

    const items = item.urls.raw
    const userName = item.user.name
  
    return(
    <TouchableOpacity style={styles.container}  onPress = {() => navigation.navigate('Image', {item})} >
      < Image
              style={styles.image}
              source={{uri : items}}
              
              
            />
       <View>     
        <Text  style={styles.textName}> {userName}   </Text>
        <Text  style={styles.text}> {item.alt_description} </Text>
      </View>

    </TouchableOpacity>
    )
  }



    return ( load ?  
    <View style={styles.container} >

      <FlatList
        data={DrinksContext.data}
        renderItem={rendersItem}
        keyExtractor={item => item.id}
      />

    </View> : <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ActivityIndicator size="large" color="grey" />
    </View>
   
     
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    padding: 10,
  },
  image: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    textAlign: 'center',
    color: 'grey'
  },
  textName : {
    textAlign: 'center',
    color: 'black'
  }
});










 
