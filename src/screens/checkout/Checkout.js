import React, {useState,useRef} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import SimpleBackHeader from '../../components/Header/SimpleBackHeader';
import RBSheet from "react-native-raw-bottom-sheet";
import RbSheets from '../../components/List/RbSheet';
import ImagesPath from '../../common/ImagesPath';
import Colors from '../../common/Colors';

function Checkout(props) {
  const [deliverymethod, setDeliveryMethod] = useState('doorDelivery');
  const [paymentmethod, setPaymentMethod] = useState('klasha');
  const refRBSheet = useRef();
  
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          {/* HEADER */}
          <SimpleBackHeader onPress={() => props.navigation.goBack()} />
        </View>

        <View style={styles.uprBox}>
          <View style={styles.uprContainer}>
            <Text style={styles.uprBoxTxt}>
              Nike Mercurial Superfly{'\n'}7 Elite Mbappe Rosa FG
            </Text>
            <Text style={styles.price}>N 12,000.00</Text>
          </View>
          <View>
            <Image
              source={ImagesPath.shoe}
              style={styles.img}
            />
          </View>
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.row}>
            <Text style={styles.del}>Delivery address</Text>
            <Text style={styles.change}>Change</Text>
          </View>
          <Text style={styles.address}>
            Plot 6 & 7 ELemo Layout, Off Oda Road, Akure-Oda Road,Onda
            +234907160290
          </Text>

          <Text style={styles.heading}>Delivery method</Text>

          <View style={styles.flexContainer}>
            <TouchableOpacity
              style={styles.selContainer}
              onPress={() => setDeliveryMethod('doorDelivery')}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: deliverymethod === 'doorDelivery' ? 3 : 1,
                  borderColor:
                    deliverymethod === 'doorDelivery' ? Colors.red : 'black',
                  borderRadius: 50,
                }}
              />
              <Text style={styles.txt}>Door delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.selContainer}
              onPress={() => setDeliveryMethod('pickup')}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: deliverymethod === 'pickup' ? 3 : 1,
                  borderColor: deliverymethod === 'pickup' ? Colors.red : 'black',
                  borderRadius: 50,
                }}
              />
              <Text style={styles.txt}>Pickup station</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.heading}>Payment method</Text>
          <TouchableOpacity
            style={styles.paymentContainer}
            onPress={() => setDeliveryMethod('klasha')}>
            <View
              style={{
                width: 20,
                height: 20,
                borderWidth: paymentmethod === 'klasha' ? 3 : 1,
                borderColor: paymentmethod === 'klasha' ? Colors.red : 'black',
                borderRadius: 50,
              }}
            />
            <Text style={styles.txt}>Pay with Klasha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnContainer} onPress={() => refRBSheet.current.open()}>
            <Text style={styles.btnTxt}>Continue to Payment</Text>
          </TouchableOpacity>

          <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={440}
        customStyles={{
          // wrapper: {
          //   backgroundColor: "transparent"
          // },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <RbSheets 
        onPressApple={()=>console.log('o')}
        onPressKlasha={()=>console.log('o')}
        />
      </RBSheet>

        </View>
      </ScrollView>
    </>
  );
}

export default Checkout;
