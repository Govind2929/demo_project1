// import React, { useEffect, useState } from 'react';
// import {
//   StatusBar,
//   Text,
//   View,
//   TouchableOpacity,
//   Dimensions,
//   Image,
//   StyleSheet,
//   TextInput,
//   SafeAreaView,
//   FlatList,
// } from 'react-native';


// const Home = ({  }) => {
// const [id ,setID] = useState("");
// const [name , setName] = useState("");
// const [data , setData] =useState("");

// const handleAdd = () => {
// setData([...data ,{name , id }])
// setName("")
// setID("")
// //console.log('datas saved' ,data );
// }

// const remove = (index)=> {
//     setData([...data.slice(0,index),...data.slice(index + 1)])
// }
// const _renderFlatListItem = ({item, index}) => {
//     return (
//       <View

//         style={{
//           marginHorizontal: 0,
//           marginLeft: 0,
//           backgroundColor:'#F5F5F5',
//           marginVertical:5,
//           height:50,
//           alignItems:'center',
//           justifyContent:'center',
//           paddingHorizontal:10,
//           borderWidth:0.2,
//           borderColor:'lightgray',
//           borderRadius:10
//         }}>
//         <View style={{flexDirection:'row'}}>
//         <Text
//                 adjustsFontSizeToFit={true}
//                 numberOfLines={3}
//                 style={{
//               //    fontFamily: Default.fontPoppins_semiBold,
//                   fontSize: 15,
//                   color: '#8B8B8B',
//                   textAlign:'left',
//                //   fontFamily:Default.fontPoppins_medium,
//                   width:'40%'

//                 }}>
//                   {item.id}


//               </Text>
//               <Text
//                 adjustsFontSizeToFit={true}
//                 numberOfLines={3}
//                 style={{
//               //    fontFamily: Default.fontPoppins_semiBold,
//                   fontSize: 15,
//                   color: '#8B8B8B',
//                   textAlign:'left',
//                //   fontFamily:Default.fontPoppins_medium,
//                   width:'40%'

//                 }}>
//                   {item.name}
//              </Text>
//              <TouchableOpacity
//              onPress={()=>{
//                 remove(index)
//              }}>
// <Text>
//     Remove
// </Text>
//              </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };
//    return (

//     <View style={styles.container}>
// <View style={styles.inputView}>
// <TextInput
// style={{width:'49%',backgroundColor:'#fff',marginRight:10,borderWidth:1,borderColor:'grey',borderRadius:10}}
// placeholder='Id'
// value={id}
// onChangeText={(text) => setID(text)}
// />
// <TextInput
// style={{width:'49%',backgroundColor:'#fff',borderWidth:1,borderColor:'grey',borderRadius:10}}
// placeholder='Name'
// value={name}
// onChangeText={(text) => setName(text)}
// />
// </View>
// <TouchableOpacity
// onPress={()=>{
//     handleAdd()
// }}
// style={{backgroundColor:'grey',height:50,width:200,borderRadius:15,justifyContent:'center',alignItems:'center'}}
// >
// <Text>
//     Add
// </Text>
// </TouchableOpacity>

// <View style = {{height:'90%', paddingHorizontal:10}}>
//             <FlatList
//               contentContainerStyle={{}}
//               data={data}
//               style={{marginTop: 20, marginHorizontal: 0}}
//               numColumns={1}
//               renderItem={_renderFlatListItem}
//               keyExtractor={item => item}
//               showsVerticalScrollIndicator={false}
//               showsHorizontalScrollIndicator={false}
//               // stickyHeaderIndices={[0,]}
//             />
//             </View>
//     </View>


//   );
// };

// export default Home;
// const styles = StyleSheet.create({
// container :{
//     flex:1 , 
//     backgroundColor:'#fff',
//     alignItems:'center'
// },
// inputView :{
//     height: 50 ,
//     width: 370,
//     backgroundColor:'#fff',
//     marginHorizontal:10,
//     flexDirection:'row',
// marginTop:50,
// marginBottom:30
// }
// });


import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  Text,
  View,

  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
  LogBox,
  RadioButton,
  Switch,
  TouchableOpacity,
  
} from 'react-native';
import Toast from 'react-native-simple-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import Header from './src/components/Header';

import { useNetInfo } from '@react-native-community/netinfo';

const Home = ({ }) => {
  const [imageUrl, setImageUrl] = useState(require('./src/assets/htmlimage.jpg'));
  const [isImage, setisImage] = useState(false);
  const [isapiImage, setapiImage] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [apiImageUrl, setApiImageUrl] = useState('');
  const navigation = useNavigation();

  const netInfo = useNetInfo();

  const fetchAppData = async () => {
    try {

      const response = await fetch('https://dummyjson.com/products/category/smartphones');
      const data = await response.json();
      const productsData = data.products[2]
      const dataImages = productsData.images[0]
      console.log('data1e', dataImages);
      setApiImageUrl(dataImages)
      // Cast the data to the AppData interface/type
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors gracefully (e.g., show an error message)
      return null; // Indicate error by returning null
    }
  };

  useEffect(async () => {
    console.log('hello world 22', imageUrl);
    setIsConnected(netInfo.isConnected)
      fetchAppData();
  }, []);

  const apiImageUrls = apiImageUrl;
  return (

    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.09 }}>
        <Header

          onDrawerPressed={() => {
            navigation.openDrawer();
          }}
          backgroundColor={'blue'}
          isForDashboar={true}
          isTimer={false}
          title={'Home'}
        />

      </View>

      {/*Image with Offline scenario*/}
      <View style={{ flex: 0.40, backgroundColor: '#cce6ff', borderRadius: 15, margin: 10 }}>
        <Text style={{ fontSize: 15, color: '#000', textAlign: 'center', paddingVertical: 5,fontWeight:'bold' }}>
          Image with Offline scenario
        </Text>
        <View style={{ flex: 0.79, alignItems: 'center' }}>
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
          style={{ flex: .22, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
          <Switch
            value={isImage}
            onValueChange={() => {
              setisImage(!isImage)
            }}
            trackColor={{ false: '#767577', true: '#81b0ff' }} // Optional: Customize track colors
            thumbColor={isImage ? '#f4f3f4' : '#fff'} // Optional: Customize thumb color
          />
        </View>
      </View>
{/* Image with Online scenario */}
      <View style={{ flex: 0.40, backgroundColor: '#cce6ff', borderRadius: 15, margin: 10 }}>
        <Text style={{ fontSize: 15, color: '#000', textAlign: 'center', paddingVertical: 5,fontWeight:'bold' }}>
          Image with Online scenario
        </Text>
        <View style={{ flex: 0.79, alignItems: 'center' }}>
          {isapiImage === true ?
            <View style={{ height: 180, width: 180, }}>
              {apiImageUrl ? (
                <Image
                  resizeMode={'contain'}
                  source={{ uri: apiImageUrls }}
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
          style={{ flex: .22, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
          <Switch
            value={isapiImage}
            onValueChange={() => {
              if (netInfo.isConnected === true) {
                fetchAppData();
                console.log('internet is available',)  
                setapiImage(!isapiImage)
                
              } 
              else {
                fetchAppData();
                console.log('internet is unavailable',) 
                Toast.show('No internet connection.', Toast.LONG);
                setapiImage(false)
               
              }
              
            }}
            trackColor={{ false: '#767577', true: '#81b0ff' }} // Optional: Customize track colors
            thumbColor={isImage ? '#f4f3f4' : '#fff'} // Optional: Customize thumb color
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('home button2', netInfo.isConnected, netInfo)
      
         navigation.navigate('Menu')
        }}
        style={{ backgroundColor: 'orange', height: 50, width: '100%', borderRadius: 15, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          Menu screen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>


  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center'
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
