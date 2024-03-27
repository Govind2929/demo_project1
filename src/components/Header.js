import React, {useState ,useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  Modal,
  Alert,
  Image
} from 'react-native';
const {width, height} = Dimensions.get('window');
//import { Default } from '../defaults/Default';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Edit from 'react-native-vector-icons/FontAwesome5';
//import {useSelector, useDispatch} from 'react-redux';
// import {Default} from '../defaults/Default';
//import {navigate} from '../navigation/navigationRef';
import {useNavigation} from '@react-navigation/native';
//import {Overlay} from 'react-native-elements';

//import { GetQuoteHistoryList ,GetMyQuoteList ,DeleteAccount} from '../store/action';

//import { IMAGES } from '../defaults/images';




const Header = ({
  title,
  isBackbtnAvailable = false,
  onDrawerPressed,
  onBackPressed,
  dashboardImage=false ,
  isTimer = false,
  isWallet = false,
  isMessage = false,
  onPress,
  isProfile = false,
  isBackdisabled = false,
  isMicrophone = false,
  isCountdown = false,
  until,
  onFinish,
  backgroundColor = '#fff',
  isForDashboard = true
}) => {
  //const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [time, setTime] = useState('');
  const [breakAlert, setbreakAlert] = useState(false);
  const [newAlert, setnewAlert] = useState(false);
  const navigation = useNavigation();


  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        backgroundColor:  'lightblue',
        paddingHorizontal: 20,
        borderBottomColor:isForDashboard === true ? 'green' : '#ECEBEB',
        borderBottomWidth:.8,
      }}>
      {isBackdisabled == false ? (
        <TouchableOpacity
          style={{flex: 0.13, justifyContent: 'center'}}
          onPress={
            isBackbtnAvailable == true ? onBackPressed : onDrawerPressed
          }>
          {isBackbtnAvailable == true ? (
            <View style={{backgroundColor: 'lightblue' ,paddingHorizontal:12,paddingVertical:1,borderRadius:15,justifyContent:'center',alignItems:'center',width:46,left:-1}}>
              <Feather name="arrow-left" size={30} color= {isForDashboard === true ?'#FFF': '#FFF'}  />
             
              {/* <Image style={{  width: 20,height: 20,resizeMode: 'contain',borderRadius: 24,tintColor:'#FFF'}} source={IMAGES.leftarrow}/> */}
            </View>
          ) : (
            
            <View style={{paddingHorizontal:12,paddingVertical:13,borderRadius:15,justifyContent:'center',alignItems:'center'}}>
            <Feather name="menu" size={30} color= {isForDashboard === true ? 'blue' : 'blue'}  />
            {/* <Image style={{  width: 40,height: 40,resizeMode: 'contain',tintColor:Default.CBlue}} source={IMAGES.menu_icon}/> */}
          </View>
           
          )}
       
        </TouchableOpacity>
      ) : null}

      <View style={{ flex:0.82,justifyContent: 'center',alignItems:'center',marginHorizontal:19}}>
        <Text
          allowFontScaling={false}
          style={{
            fontSize: 18,
            marginLeft: 0,
             marginRight:25,
            // fontFamily: Default.fontPoppins_semiBold,
            // color: Default.bidonBlue,
          }}>
          {title}
        </Text>
      </View>
     
      {/* <Overlay visible={breakAlert}>
        <View style={{width: width - 80, height: 100}}>
          <View
            style={{
              flex: 0.7,
              alignItem: 'center',
              justifyContent: 'center',
            }}>
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 16,
                color: '#3c6382',
                fontFamily: Default.FontBold,
                alignSelf: 'center',
              }}>
              {I18n.t('alert_warning')}
            </Text>
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 14,
                color: '#3c6382',
                fontFamily: Default.FontBold,
                alignSelf: 'center',
              }}>
              {I18n.t('NeedBreak')}
            </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignItem: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                marginHorizontal: 5,
                backgroundColor: Default.CGray,
                alignItem: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}
              onPress={() => {
                setbreakAlert(false);
                // setnewAlert(true);
              }}>
              <Text
                allowFontScaling={false}
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontFamily: Default.FontBold,
                  alignSelf: 'center',
                }}>
                {I18n.t('no')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                marginHorizontal: 5,
                backgroundColor: Default.CGreen,
                alignItem: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}
              onPress={() => {
                setbreakAlert(!breakAlert);
             //   startBreak();
              }}>
              <Text
                allowFontScaling={false}
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontFamily: Default.FontBold,
                  alignSelf: 'center',
                }}>
                {I18n.t('yes')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={stylesC.ModalContainer}>
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 18,
                fontFamily: Default.FontBold,
                textAlign: 'center',
              }}>
              {I18n.t('breakTitle')}
            </Text>
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 16,
                fontFamily: Default.FontRegular,
                color: Default.CBlue,
                marginTop: 3,
              }}>
              {I18n.t('startedOn')}
            </Text>
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 16,
                fontFamily: Default.FontRegular,
                color: Default.CRed,
                marginTop: 3,
              }}>
              {time}
            </Text>
            <TouchableOpacity
              style={stylesC.ModalButton}
              onPress={() =>
               endBreak()
               }>
              <Text
                allowFontScaling={false}
                style={{
                  fontSize: 16,
                  fontFamily: Default.FontBold,
                  color: Default.CWhite,
                }}>
                {I18n.t('stop')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}

    </View>
  );
};
export default Header;
const stylesC = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  ContainerView: {
    flex: 0.9,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtnCard: {
    height: height * 0.07,
    paddingHorizontal: 10,
    marginTop: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Card: {
    height: height * 0.07,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
  },
  CardView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ModalContainer: {
    backgroundColor: '#FFF',
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.3,
    height: 30,
    backgroundColor: 'orange',
    marginTop: 5,
    borderRadius: 10,
  },
});
