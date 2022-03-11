import React, {useEffect, useState} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleHeader from '../../components/Header/Headers';
import {Rating} from 'react-native-ratings';
import Colors from '../../common/Colors';
import styles from './styles';
import ImagesPath from '../../common/ImagesPath';
import Axios from 'axios';

function Home(props) {
  const ratingCompleted = () => {
    console.log('rating');
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      let response = await Axios({
        url: ``,
        method: 'GET',
        headers: {
          'access-token': props?.user?.access_token,
          client: props?.user?.client,
          uid: props?.user?.uid,
        },
      });
      console.log(
        'response while Getting Responce',
        JSON.stringify(response?.data?.collection_points),
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('Error in Getting Responce=> ' + error);
    }
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          {/* HEADER */}
          <SimpleHeader
            onPressCart={() => props.navigation.navigate('Checkout')}
          />

          <Text style={styles.collectionName}>Nike Collections</Text>
          <Image source={ImagesPath.shoe} style={styles.img} />

          <Text style={styles.description}>
            Nike Mercial Superfly 7 Elite Mbppe Rose FG
          </Text>

          <Text style={styles.price}>N 12,000.00</Text>

          <Text style={styles.description}>
            Eligible for shopping To mars or someone else.
          </Text>

          <View style={styles.box}>
            <View style={styles.row}>
              <Rating
                imageSize={20}
                onFinishRating={ratingCompleted()}
                style={styles.rating}
              />
              <Text style={styles.ratingTxt}>4.05</Text>
            </View>

            <TouchableOpacity style={styles.addCartContainer}>
              <AntDesign
                name="shoppingcart"
                size={24}
                color={Colors.white}
                style={styles.cartIcon}
              />
              <Text style={styles.cartTxt}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Home;
