// 


import React  from 'react';
import { View , TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Menu from './src/screens/menu';
import 'react-native-gesture-handler';
import Profile from './src/Drawer/profile';
import DrawerContent from './src/components/DrawerContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomBottomTab from './src/components/CustomBottomTab';
import ScriptedDataScreen from './src/screens/scripedDataScreen';
// import { SampleScriptContext, SampleScriptProvider } from './src/screens/SampleScriptProvider';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function MyBottomTab() {

  const screens = [
    { name: 'Home', component: MyStack, icon: 'home-outline' }, // Use specific icons
    { name: 'Menu', component: Menu, icon: 'apps-outline' },
    { name: 'Profile', component: Profile, icon: 'person-outline' },
  ];
  return (
    <BottomTab.Navigator
    screenOptions={{
      
    }}
    >
      
      <BottomTab.Screen name="Home" component={MyStack}
       options={{headerShown: false,
        tabBarIcon: ({  }) => (
          <Ionicons name="home-outline" size={24} color={'blue'} />
        ),
       }} />
      <BottomTab.Screen name="Menu" component={Menu}
       options={{headerShown: false, 
        tabBarIcon: ({  }) => (
          <Ionicons name="apps" size={24} color={'blue'} />
        ),
       }} />
        <BottomTab.Screen name="Profile" component={Profile}
       options={{headerShown: false, 
        tabBarIcon: ({  }) => (
          <Ionicons name="person-sharp" size={24} color={'blue'} />
        ),
       }} />

    </BottomTab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator  >
      <Stack.Screen 
      name='Dashboard'
      component={Home}
      options={{headerShown: false}}
      />
      <Stack.Screen 
      name='Mainscreen'
      component={Menu}
      options={{headerShown: false}}
      />
       
      <Stack.Screen
       name="Profile"
        component={Profile} 
        options={{headerShown: false}}
        />
         <Stack.Screen
       name="ScriptedDataScreen"
        component={ScriptedDataScreen} 
        options={{headerShown: false}}
        />
         <Stack.Screen
       name="MyBottomTab"
        component={MyBottomTab} 
        options={{headerShown: false}}
        />
     </Stack.Navigator>
  );
}



function MyDrawer() {
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: 'front',
      swipeEdgeWidth: 0,
      gestureEnabled: false,
      swipeEnabled : false
    }}
    drawerContentOptions={{}}
    
    drawerContent={props => <DrawerContent {...props} />}>
      
      <Drawer.Screen
        name="MyBottomTab"
        component={MyBottomTab}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen name="Article" component={Profile} /> */}
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer >
    <MyDrawer />
    </NavigationContainer>
  );
}