import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    padding: 20,
  },
  collectionName: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    color: Colors.black,
    marginTop: 40,
  },
  img: {
    width: '95%',
    alignSelf: 'center',
    height: 250,
    marginTop: 40,
  },
  description: {
    marginLeft: '3%',
    marginTop: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: '3%',
    marginTop: 10,
    color: Colors.black,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  rating: {
    paddingVertical: 10,
  },
  ratingTxt: {
    color: Colors.black,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  addCartContainer: {
    width: 150,
    height: 50,
    backgroundColor: Colors.red,
    flexDirection: 'row',
  },
  cartIcon: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  cartTxt: {
    color: Colors.white,
    fontWeight: '600',
    alignSelf: 'center',
    fontSize: 18,
    marginLeft: 10,
  },
});
