import * as React from 'react';

import { View, ScrollView, StyleSheet } from 'react-native';
import {  Text, Card, Icon } from 'react-native-elements';
import colors from '../shared/colors';


const ContactScreen = () => {
  return (
    <ScrollView>
      <Card>
        <Card.Title style={styles.text} h4>Phones</Card.Title>
        <Text style={styles.text}>
          Nigeria:
          +2347051869038
          +2347051869472
        </Text>
        <Text style={styles.text}>
          United States:
          +1(631)402-6444
        </Text>
      </Card>

      <Card>
        <Card.Title style={styles.text} h4>Email</Card.Title>
        <Text style={styles.text}>
          info@ephphatag.org 
        </Text>
        <Text style={styles.text}>
          onlinestore@ephphatag.org
        </Text>
        <Text style={styles.text}>
          padresammy@ephphatag.org
        </Text>
      </Card>

      <Card>
        <Card.Title style={styles.text} h4>Address</Card.Title>
        <Text style={styles.text}>
          Lagos:
        </Text>
        <Text style={styles.text}>
          Vincentian Retreat Centre1.
          De Paul close,off Yakoyo Bus stop,Ojudu Berger,Ikeja,Lagos,Nigeria.
        </Text>
        <Text style={styles.text}>
          Abuja:
        </Text>
        <Text style={styles.text}>
          St Kizito Parish Kuje
          FCT,Abuja,Nigeria.
        </Text>
        <Text style={styles.text}>
          United State:
        </Text>
        <Text style={styles.text}>
          6501 94th Avenue,Lanham,MD,20706 USA.
        </Text>
      </Card>

      <Card>
        <View
          style={{
            justifyContent: 'center',
            flexGrow: 1,
            flexDirection: 'row',
          }}
        >
          <Icon
            raised
            name='facebook'
            type='font-awesome'
            color={colors.accent}
            onPress={() => console.log('hello')}
          />
          <Icon
            raised
            name='youtube'
            type='font-awesome'
            color={colors.accent}
            onPress={() => console.log('hello')}
          />
          <Icon
            raised
            name='instagram'
            type='font-awesome'
            color={colors.accent}
            onPress={() => console.log('hello')}
          />

          <Icon
            raised
            name='twitter'
            type='font-awesome'
            color={colors.accent}
            onPress={() => console.log('hello')}
          />
        </View>
      </Card>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    paddingTop: 20,
    paddingLeft: 20,
    color: colors.secondary,
  },
  text: {
    marginBottom: 10,
    color: colors.accent,
  },
});

export default ContactScreen
