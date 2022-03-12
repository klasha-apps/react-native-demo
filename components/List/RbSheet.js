import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../common/Colors';
import ImagesPath from '../../common/ImagesPath';
import KlashaWebView from "react-native-klasha-webview";

export default function RbSheets(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.flex}>
          <Image source={ImagesPath.name} style={styles.img} />
          <Text style={styles.email}>adalichie@gmail.com</Text>
        </View>

        <Text style={styles.pay}>Pay</Text>
        <Text style={styles.price}>N35554.64</Text>

        <TouchableOpacity style={styles.applePay} onPress={props.onPressApple}>
          <View style={styles.row}>
            <Text style={styles.txt}>Pay with</Text>
            <AntDesign
              name="apple1"
              color="white"
              size={18}
              style={styles.appleIcon}
            />
            <Text style={styles.txt}>Pay</Text>
          </View>
        </TouchableOpacity>

<View style={{height:70}}>
        <KlashaWebView
          buttonText="Continue with Klasha"
          showPayButton={true}
          merchantKey="W2mbGtdx5vKCepFaUm2CqdzebaVW9z22shubB4xFbKTR3g4sL72+7qNQYHTUEfs0my1e/hAO1Nkdx9YbXTjUOg=="
          businessId="your-businessId"
          amount={120000}
          customerEmail="yowivig426@goonby.com"
          customerPhoneNumber="08143108254"
          customerFullname="Dansteve Adekanbi"
          callbackUrl=""
          countryCode="NGN"
          sourceCurrency="NGN"
          paymentType=""
          ActivityIndicatorColor="green"
          SafeAreaViewContainer={{ marginTop: 5 ,
            width: '100%',
            height: 50,
            backgroundColor: Colors.red,
            marginTop: 20,}}
          SafeAreaViewContainerModal={{ marginTop: 5 }}
          textStyles={{color:'white',fontSize:18,alignSelf:'center',marginTop:12}}
          callBack={(res) => {
            // handle response here
            console.log(res);
          }}
          isTestMode={true}
          autoStart={false}
        />
        </View>
        {/* <TouchableOpacity
          style={styles.klashContainer}
          onPress={props.onPressKlasha}>
          <Text style={styles.txt1}>Continue with Klasha</Text>
        </TouchableOpacity> */}

        <Image
          source={ImagesPath.secure}
          style={styles.secure}
        />

        <View style={styles.footer}>
          <Text style={styles.txt2}>Email:support@support.com</Text>
          <Text style={styles.txt3}>whatapp: +232332323232</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 15,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    height: 50,
    width: 100,
  },
  email: {
    marginTop: 15,
    color: Colors.black,
  },
  pay: {
    alignSelf: 'center',
    color: Colors.black,
    marginTop: 20,
  },
  price: {
    alignSelf: 'center',
    color: '500',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  applePay: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.black,
    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  txt: {
    color: Colors.white,
    fontSize: 18,
  },
  appleIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  klashContainer: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.red,
    marginTop: 20,
  },
  txt1: {
    alignSelf: 'center',
    color: Colors.white,
    fontSize: 18,
    marginTop: 12,
  },
  secure: {
    alignSelf: 'center',
    height: 18,
    width: 200,
    marginTop: 40,
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
  },
  txt2: {
    fontSize: 12,
  },
  txt3: {
    fontSize: 12,
    marginLeft: 10,
  },
});