import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/explore/Explore';
import StoreScreen from '../screens/Store';
import colors from '../shared/colors';
import GiveScreen from '../screens/Give';


const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: colors.secondary }}
      activeColor={colors.primary }
      inactiveColor={colors.success }
      shifting={false}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='compass-outline'
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='store-outline'
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Give"
        component={GiveScreen}
        options={{
          tabBarLabel: 'Give',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='gift-outline'
              color={color}
              size={26}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default BottomTabNavigator
