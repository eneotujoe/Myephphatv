import * as React from 'react';

import { View, ScrollView, StyleSheet, Dimensions, Linking } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Card, Button, Icon } from 'react-native-elements';
import colors from '../shared/colors';
import { WebView } from 'react-native-webview';



const Stack = createNativeStackNavigator();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;



// const DonateScreen = () => {
//   return (
//     <View style={{ flex:1 }}>
//       <WebView
//         source={{ uri: 'https://dashboard.flutterwave.com/donate/vxeyyf93r7ry' }}
//         style={{ marginTop: -15, marginHorizontal: -28, marginBottom: -45 }}
//       />
//     </View>

//   );


const GiveScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Card>
        <Card.Title style={styles.text}>
          DONATE BY CREDIT CARD
        </Card.Title>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Donate"
            onPress={ ()=>{ Linking.openURL('https://dashboard.flutterwave.com/donate/vxeyyf93r7ry')}} 
          />
      </Card>

      <Card>
        <Card.Title style={styles.text}>
        YOU CAN ALSO MAKE YOUR  PARTNERSHIP DIRECT  TRANSFER PAYMENT HERE
        </Card.Title>
        <Text style={styles.text}>
          Acct name: EPHPHATA GLOBAL MINISTRIES
        </Text>
        <Text style={styles.text}>
          Bank name: Zenith Bank
        </Text>
        <Text style={styles.text}>
          Account Number: 1211447347
        </Text>
        <Text style={styles.text}>
          Sort Code: 057150893
        </Text>
        <Text style={styles.text}>
          Swift Code: ZEIBNGL
        </Text>
      </Card>
      
      <Card>
        <Card.Title style={styles.text}>
          PARTNER WITH US
        </Card.Title>
        <Button buttonStyle={styles.buttonStyle} title="Sign Up" onPress={() => console.log('hello')}>
        </Button>
      </Card>
      
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingVertical: 0,
  },
  text: {
    marginVertical: 10,
    color: colors.accent
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: colors.secondary
  },
});

export default GiveScreen
