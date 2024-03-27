




import React, { useEffect, useState, useContext } from 'react';
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
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
//import { SampleScriptContext } from './SampleScriptProvider'; // Import the context
import ScriptDataContext from './SampleScriptProvider';
import Profile from '../Drawer/profile';
import ScriptedDataScreen from './scripedDataScreen';
const scripts = [];
const Menu = ({ }) => {
  const [imageUrl, setImageUrl] = useState(require('../assets/htmlimage.jpg'));
  const [isImage, setisImage] = useState(false);
  const navigation = useNavigation();

  const [scriptData, setScriptData] = useState({ scripts });

  const addScript = (script) => {
    setScriptData((prevState) => ({ ...prevState, scripts: [...prevState.scripts, script] }));
  };


  // const { sampleScriptData } = useContext(SampleScriptContext); // Access script data from context
 // const { sampleScriptData, isLoading } = useContext(SampleScriptContext);

  // if (isLoading) {
  //   return <Text>Loading script...</Text>;
  // }
  // ... existing useEffect code (if needed)
  useEffect( () => {
    console.log('hello world 22@2' , );
   console.log('SampleScriptContext:', );

  }, []);
  return (
    <ScriptDataContext.Provider value={{ scripts: scriptData.scripts, addScript }}>
    <ScriptedDataScreen />
    </ScriptDataContext.Provider>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputView: {
    height: 50,
    width: 370,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 30,
  },
  scriptContainer: {
    marginTop: 20, // Adjust margin as needed
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
