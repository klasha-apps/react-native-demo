import React, {  useState } from 'react';
import {
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home/Home';
import Checkout from './screens/checkout/Checkout';
import Colors from './common/Colors';

const MainStack = createStackNavigator();


const Navigation = (props) => {
  return (
    <>
    <NavigationContainer>
            <MainStack.Navigator  headerMode="none" >
              <MainStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
              <MainStack.Screen name="Checkout" component={Checkout} options={{headerShown:false}}/>
            </MainStack.Navigator>
            {/* Footer */}
            <View style={{height: 50, borderTopWidth: 0.5, borderTopColor: '#E5E5E5',
            backgroundColor: '#F9F9F9'}}>
              <Text style={{color: Colors.black, justifyContent: 'center',
            alignSelf:'center',marginTop:8, fontSize: 12}}>klasha.com</Text>
            </View>
      </NavigationContainer>
      </>
  );
}




export default (Navigation);






