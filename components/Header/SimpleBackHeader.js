import React from 'react';
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SimpleBackHeader(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={props.onPress}>
        <AntDesign name="arrowleft" size={24} color={'black'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginTop:Platform.OS === 'ios' ? 30 : null
  },
  backBtn: {
    marginTop: 12,
  },
});
