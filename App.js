import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync()
  .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn);

class App extends Component {

  componentDidMount() {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }

  render() {
    return (
      <SafeAreaProvider>
        {/* <StatusBar barStyle="dark-content" /> */}
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
      )
  }

}

export default App





// import { NavigationContainer } from '@react-navigation/native';
// import RootStackNavigator from './src/navigations/RootStackNavigator';
// // import Header from './src/shared/header';

// export default function App () {

//   return (
//     <NavigationContainer>
//       <RootStackNavigator />
//     </NavigationContainer>
//     )
// }





// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomeScreen from './src/screens/Home';
// import DonateScreen from './src/screens/Give/Donate';
// import GiveScreen from './src/screens/Give/Give';


// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// function Root() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Profile" component={GiveScreen} />
//       <Stack.Screen name="Donate" component={DonateScreen} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Root"
//         screenOptions={{ headerShown: false }}
//       >
//         <Drawer.Screen name="Root" component={Root} />
//         <Drawer.Screen name="Home" component={HomeScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// import * as React from 'react';
// import { View, Text, Button, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Icon } from 'react-native-elements';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';
// import BottomTabNavigator from './src/navigations/BottomTabNavigator';

// // import HomeScreen from './src/screens/Home';
// import DonateScreen from './src/screens/Give/Donate';
// import GiveScreen from './src/screens/Give/Give';
// import { FontAwesome5 } from '@expo/vector-icons';

// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';


// const Stack = createNativeStackNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
//     </View>
//   );
// }

// function Notifications({navigation}) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
//     </View>
//   );
// }

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//       screenOptions={({ navigation }) => ({ 
//         title: 'Products', 
//         headerRight: () => <TouchableOpacity onPress={() => navigation.toggleDrawer()}> 
//         <FontAwesome5 name='bars' color='orange' size={20} /></TouchableOpacity>,
//         headerLeftContainerStyle: { paddingLeft: 10 } }
//     )}
//     >
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Notifications" component={Notifications} />
//     </Drawer.Navigator>
//   );
// }

// function MyTab() {
//   return (
//     <Tab.Navigator
//       barStyle={{ backgroundColor: '#694fad' }}
//       activeColor="#f0edf6"
//       inactiveColor="#3e2465"
//       shifting={false}
//     >
//       <Tab.Screen name="Feed" component={Feed}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home-outline" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen name="Donate" component={DonateScreen} 
//       options={{
//           tabBarLabel: 'Donate',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="bell-outline" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen name="Give" component={GiveScreen} 
//       options={{
//           tabBarLabel: 'Give',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="bell-outline" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen name="Notifications" component={Notifications} 
//       options={{
//           tabBarLabel: 'Notifications',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="bell-outline" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function MyStack({navigation}) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Notifications" component={MyTab} options={{ headerShown: false }}/>
//     </Stack.Navigator>
//   );
// }

// function Header() {
//   const navigation = useNavigation();

//   return (
//     <Button
//       title="Back"
//       onPress={() => {
//         navigation.toggleDrawer();
//       }}
//     />
//   );
// }
// export default function App() {

//   return (
//     <NavigationContainer>

//       <Stack.Navigator
//         screenOptions={() => ({ 
//           // title: 'Products II', 
//           headerRight: () => <Header />  }
//       )}
//       >

//         <Stack.Screen
//           name="Hom"
//           component={BottomTabNavigator}
//         />

//         <Stack.Screen
//           name="Drawer"
//           component={MyDrawer}
//         />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
