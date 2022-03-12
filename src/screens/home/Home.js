import React, {useEffect, useState} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleHeader from '../../components/Header/Headers';
import {Rating} from 'react-native-ratings';
import Colors from '../../common/Colors';
import styles from './styles';
import ImagesPath from '../../common/ImagesPath';
import Axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

const staticList = [
  {
    id:1,
    productName:'Nike Mercial Superfly 7 Elite Mbppe Rose FG',
    price: '₦ 12,000.00',
    description: 'Eligible for shopping To mars or someone else.',
    rating: '4.05'
  },
  {
    id:2,
    productName:'Nike Mercial Superfly 7 Elite Mbppe Rose FG',
    price: '₦ 13,000.00',
    description: 'Eligible for shopping To mars or someone else.',
    rating: '3.05'
  }
]

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
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.innerContainer}>
      <SimpleHeader
        onPressCart={() => props.navigation.navigate('Checkout')} />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.collectionName}>Nike Collections</Text>

          <FlatList
                            data={staticList}
                            style={{}}
                            contentContainerStyle={{
                              bottom: 20
                            }}
                            renderItem={({ item, index }) => (
                              <View>
                              <Image source={ImagesPath.shoe} style={styles.img} />
                    
                              <Text style={styles.description}>{item.productName}</Text>
                    
                              <Text style={styles.price}>{item.price}</Text>
                    
                              <Text style={styles.description}>{item.description}</Text>
                              <View style={styles.box}>
                                <View style={styles.row}>
                                  <Rating
                                    imageSize={15}
                                    onFinishRating={ratingCompleted()}
                                    style={styles.rating}
                                  />
                                  <Text style={styles.ratingTxt}>{item.rating}</Text>
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
                            )}
                            // keyExtractor={item => item.id}
                        />
        </View>
      </ScrollView>
    </View>
    </>
  );
}

export default Home;
