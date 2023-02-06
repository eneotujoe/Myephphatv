import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View, StyleSheet, ImageBackground, Button, Linking, TouchableOpacity } from 'react-native';
import { Icon, Image, Text } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTabNavigator from './BottomTabNavigator';

import colors from '../shared/colors';
import TestimonyScreen from '../screens/Testimony';
import PrayerScreen from '../screens/Prayer';
import ContactScreen from '../screens/Contact';
import AboutScreen from '../screens/About';


const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/images/logo.png')}
    />
  );
}
// function CustomDrawerContent(props) {
//   return (
//     <View style={styles.container}>
//       <DrawerContentScrollView {...props} contentContainerStyle={styles.contentContainer}>
//         <View style={styles.imageContainer}>
//           <ImageBackground
//             source={require('../assets/images/logo.png')}
//             style={styles.image}
//           >
//           </ImageBackground>
//         </View>
//         <DrawerItemList {...props} />
//       </DrawerContentScrollView>
//       <View>
//         <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://ephphatag.org')}}  style={styles.text}>
//           <Text style={styles.text}>
//            Ephphatha Global Ministries
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }


const DrawerNavigator = ({ navigation }) => {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerTitle: (props) => <LogoTitle {...props} />,
        headerTintColor: colors.success,
        headerStyle: {backgroundColor: colors.secondary},
        headerTitleAlign: 'center',
        drawerActiveBackgroundColor: colors.accent,
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.success,
        drawerLabelStyle: {marginLeft: -20},
    })}
    >

      {/* <Drawer.Screen name="Home Screen" component={BottomTabNavigator} */}
        options={{
          drawerLabel: 'Home Screen',
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons 
              name="home-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Testimony"
        component={TestimonyScreen}
        options={{
          drawerLabel: 'Testimony',
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons 
              name='comment-quote-outline'
              color={color}
              size={26}
            />
          ),
        }}
      />
      
      <Drawer.Screen
        name="Prayer Request"
        component={PrayerScreen}
        options={{
          drawerLabel: 'Prayer Request',
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons 
              name='message-text-outline'
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          drawerLabel: 'Contact',
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons 
              name='contacts-outline'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerLabel: 'About',
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons 
              name='information-outline'
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    height: 100,
  },
  contentContainer: {
    flexGrow: 1,
    paddingVertical: 0,
    backgroundColor: colors.info,
  },
  image: {
    height: 100,
    width: 130,
    marginBottom: 15,
    elevation: 20
  },
  text: {
    color: colors.success,
    marginVertical: 10,
    marginLeft: 15,
  },
});

export default DrawerNavigator;
