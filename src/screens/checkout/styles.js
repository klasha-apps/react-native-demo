import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  innerContainer: {padding: 10},
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: '6%',
    marginTop: 20,
    color: Colors.black,
  },
  uprBox: {
    width: '100%',
    height: 180,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
  },
  uprContainer: {width: '70%'},
  uprBoxTxt: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.black,
    marginLeft: '5%',
    marginTop: 20,
    lineHeight: 34,
  },
  img: {
    width: 120, 
    height: 80, 
    alignSelf: 'center', 
    marginTop: 50
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 20
  },
  del: {
    color: Colors.black, 
    fontWeight: 'bold', 
    fontSize: 16
  },
  change: {
    color: Colors.red, 
    fontWeight: '500', 
    fontSize: 16
  },
  address: {
    width: '90%', 
    lineHeight: 20, 
    marginTop: 6,
    color: Colors.grey
  },
  heading: {
    color: Colors.black, 
    fontWeight: 'bold', 
    fontSize: 16, 
    marginTop: 20
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
  },
  selContainer: {
    flexDirection: 'row', 
    marginTop: 20
  },
  txt: {
    color: Colors.black, 
    marginLeft: 7
  },
  paymentContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: '10%',
  },
  btnContainer: {
    width: '80%',
    height: 50,
    backgroundColor: Colors.red,
    alignSelf: 'center',
    marginTop: 60,
    justifyContent: 'center',
  },
  btnTxt: {
    alignSelf: 'center',
    color: Colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
});
