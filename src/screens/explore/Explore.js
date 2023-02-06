import { SafeAreaView, StyleSheet, TouchableOpacity, Button, View, Text, FlatList, Image } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../../shared/colors';
import TestimonyScreen from './Testimony';

const Stack = createNativeStackNavigator();

const data = [
    {
        title: 'Testimonies',
        source: require('../../assets/images/water.png'),
    },
    {
        title: 'Sermons And Devotionals',
        source: require('../../assets/images/oil.png'),
    },
    {
        title: 'Deliverance',
        source: require('../../assets/images/prayer.png'),
    },
    {
        title: 'Works Of Charity',
        source: require('../../assets/images/balm.png'),
    },
];

const SermonScreen = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.source} style={styles.image} />
            <Button
                title="view"
                onPress={() => navigation.navigate('Testimonies')}
                color={colors.secondary}
            >
            </Button>
        </View>
      );
    
    return (
      <SafeAreaView>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />
      </SafeAreaView>
    );
  }
  
const ExploreStack = () => {

    return (
      
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
            
            <Stack.Screen
                name="Sermons"
                component={SermonScreen}
            />
            
            <Stack.Screen
                name="Testimonies"
                component={TestimonyScreen}
            />

        </Stack.Navigator>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eedccd',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  title: {
    fontSize: 20,
    color: colors.secondary,
    textAlign: 'center',
    paddingTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  button: {
    color: 'red',
  }
});


export default ExploreStack
