import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../shared/header';
import colors from '../shared/colors';


import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutScreen from '../screens/About';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../assets/images/logo.png')}
      />
    );
  }
  
const RootStackNavigator = ({ navigation }) => {

  return (
    <Stack.Navigator
        screenOptions={({ navigation }) => ({
            headerRight: () => <Button title='menu' onPress={() => navigation.toggleDrawer()} />,
            headerTitle: (props) => <LogoTitle {...props} />,
            // headerRight: () => <Button title='menu' onPress={() => navigation.toggleDrawer()}></Button>,
                // <MaterialCommunityIcons name="menu" size={26} /> 
            headerStyle: {backgroundColor: colors.secondary}
        })}
    >
{/*         
      <Stack.Screen
        name="Drawer nav"
        component={DrawerNavigator}
      /> */}

    </Stack.Navigator>
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
    headerStyle: {
      backgroundColor: colors.info,
    },
    headerRight: {
      flex: 1,
      justifyContent: 'center',
      // alignItems: 'center',
    },
  });
  
export default RootStackNavigator
