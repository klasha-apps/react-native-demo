import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../common/Colors';
import ImagesPath from '../../src/common/ImagesPath';

export default function SimpleHeader(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={ImagesPath.logo} style={styles.logo} />
        <Text style={styles.storeName}>Store</Text>
      </View>
      <View style={styles.flexRow}>
        <TouchableOpacity onPress={props.onPressCart}>
          <AntDesign name="shoppingcart" size={24} style={styles.cartIcon} />
        </TouchableOpacity>
        <Text style={styles.cart}>Cart</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeTxt}>1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:Platform.OS === 'ios' ? 30 : null
  },
  row: {
    flexDirection: 'row',
  },
  logo: {
    width: 40,
    height: 40,
  },
  storeName: {
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  cartIcon: {
    margin: 5,
  },
  cart: {
    margin: 5,
    marginTop: 6,
    fontWeight: 'bold',
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 150,
    backgroundColor: Colors.red,
    margin: 5,
  },
  badgeTxt: {
    color: Colors.white,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
