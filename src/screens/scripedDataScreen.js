
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
import ScriptDataContext from './SampleScriptProvider';
const ScriptedDataScreen = ({ }) => {
  const [imageUrl, setImageUrl] = useState(require('../assets/htmlimage.jpg'));
  const [isImage, setisImage] = useState(false);
  const navigation = useNavigation();

  const { scripts, addScript } = useContext(ScriptDataContext);

  const [sampleScript, setSampleScript] = useState('');

  const handleAddScript = () => {
   
    if (sampleScript != '') {
      addScript(sampleScript);
    }
   
  };


  //   useEffect(async () => {
  //     console.log('hello world 22' ,imageUrl );

  //    setImageUrl(require('../assets/htmlimage.jpg'));
  //   }, []);


  return (

    <SafeAreaView style={styles.container}>
      <View style={{ height:50 }}>
        <Header

          onBackPressed={() => navigation.goBack()}
          backgroundColor={'blue'}
          isBackbtnAvailable={true}
          isForDashboar={false}
          isTimer={false}
          title={'Menu'}
        />

      </View>
     
      <View style={{ backgroundColor: '#FFF', borderWidth:1,borderColor:'grey' , margin:10, justifyContent:'center', }}>
        {/* <Text>Home Screen</Text> */}
    <View style={{ }}>
    {scripts.map((script, index) => (
          <Text key={index}>{script}</Text>
        ))}
    </View>
        <TextInput
          style={{ width: '90%', backgroundColor: '#fff', borderWidth: 1, borderColor: 'grey', borderRadius: 10 ,alignSelf:'center',marginVertical:20}}
          placeholder='enter the script'

          onChangeText={(text) => setSampleScript(text)}
        />
        <Button title="Add Script" onPress={handleAddScript} />
      </View>

    </SafeAreaView>


  );
};

export default ScriptedDataScreen;
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
