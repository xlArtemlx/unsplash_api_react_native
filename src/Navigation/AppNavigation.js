import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';




import { FullImg } from '../screens/FullImg';
import  {Filters}  from '../screens/Filters';


const Stack = createStackNavigator ();


export const AppNavigation = () => {

    return ( 
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Filters"
            screenOptions={{ gestureEnabled: true }}
            
            >
                <Stack.Screen
                    name="Filters"
                    component={Filters}
                    options={{
                    headerStyle: {
                        shadowOpacity: 1.2,
                        shadowRadius: 10,
                        borderBottomWidth: 3,
                        shadowColor:'black'
                      },
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },}}
                />
                <Stack.Screen
                    name="Image"
                    component={FullImg}
                    options={{
                    headerStyle: {
                        shadowOpacity: 1.2,
                        shadowRadius: 10,
                        borderBottomWidth: 3,
                        shadowColor:'black'
                      },}}
                />
             
                
            
            </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({})

