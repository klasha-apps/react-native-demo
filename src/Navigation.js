import React, {  useState } from 'react';
import {
  Linking
} from 'react-native';
// import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home/Home';
import Checkout from './screens/checkout/Checkout';

const MainStack = createStackNavigator();


const Navigation = (props) => {
  return (
    <>
    <NavigationContainer>

            <MainStack.Navigator  headerMode="none" >
            
              <MainStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
              <MainStack.Screen name="Checkout" component={Checkout} options={{headerShown:false}}/>
            </MainStack.Navigator>
   
      </NavigationContainer>
      </>
  );
}




export default (Navigation);






