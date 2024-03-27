
import React, { useContext, useEffect, useState } from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
  LogBox,
  RadioButton,
  Switch,
  Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native'
import ScriptDataContext from '../screens/SampleScriptProvider';
const Profile = ({ }) => {
  const [imageUrl, setImageUrl] = useState(require('../assets/htmlimage.jpg'));
  const [isImage, setisImage] = useState(false);
  const navigation = useNavigation();

  const { scripts, addScript } = useContext(ScriptDataContext);

  const [sampleScript, setSampleScript] = useState('');

  const handleAddScript = () => {
    addScript(sampleScript);
  };


  //   useEffect(async () => {
  //     console.log('hello world 22' ,imageUrl );

  //    setImageUrl(require('../assets/htmlimage.jpg'));
  //   }, []);


  return (

    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.09 }}>
        <Header

          onBackPressed={() => navigation.goBack()}
          backgroundColor={'blue'}
          isBackbtnAvailable={true}
          isForDashboar={false}
          isTimer={false}
          title={'Profile'}
        />

      </View>
      <View style={{ flex: 0.29, paddingVertical:20,paddingHorizontal:16}}>
      <View style={{height:50 , width:'100%',marginBottom:20 , borderRadius:5, borderWidth:1, borderColor:'grey',justifyContent:'center',paddingLeft:10}}>
        <Text style={{fontSize:15,color:'grey'}}>
          Username
        </Text>
      </View>
      <View style={{height:50 , width:'100%',marginBottom:20 , borderRadius:5, borderWidth:1, borderColor:'grey',justifyContent:'center',paddingLeft:10}}>
        <Text style={{fontSize:15,color:'grey'}}>
          email
        </Text>
      </View>
      <View style={{height:50 , width:'100%',marginBottom:20 , borderRadius:5, borderWidth:1, borderColor:'grey',justifyContent:'center',paddingLeft:10}}>
        <Text style={{fontSize:15,color:'grey'}}>
          mobile number
        </Text>
      </View>
      </View>
      {/* <View style={{ flex: 0.29, }}>
        {isImage === true ?
          <View style={{ height: 180, width: 180, }}>
            {imageUrl ? (
              <Image
                resizeMode={'contain'}
                source={imageUrl}
                style={{ height: '100%', width: '100%' }}
              //   onError={handleError} // Handle image loading errors
              />

            ) : (
              <Text>Loading image...</Text>
            )}
          </View> : null
        }
      </View>


      <View
        style={{ height: 50, width: 200, justifyContent: 'center', alignItems: 'center', marginTop: 90 }}>
        <Switch
          value={isImage}
          onValueChange={() => {
            setisImage(!isImage)
          }}
          trackColor={{ false: '#767577', true: '#81b0ff' }} // Optional: Customize track colors
          thumbColor={isImage ? '#f4f3f4' : '#fff'} // Optional: Customize thumb color
        />
      </View>


      <TouchableOpacity
        onPress={() => {
          console.log('profile button')
          // navigation.navigate('Menu')
        }}
        style={{ backgroundColor: 'orange', height: 50, width: '100%', borderRadius: 15, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          button
        </Text>
      </TouchableOpacity> */}

   
    </SafeAreaView>


  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center'
  },
  inputView: {
    height: 50,
    width: 370,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 30
  }
});
