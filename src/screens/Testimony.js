import * as React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';
import {  Text, Card, Avatar } from 'react-native-elements';
import colors from '../shared/colors';


const TestimonyScreen = () => {
  return (
    <ScrollView>

      <Card>
        <Text style={styles.text}>
          Praise to Jesus, for 10yrs have been finding very difficult walk with my two legs since i had accident, I can not drive or do anything for myself, accept with the aid of my children. On this blessed day that Fr. Sam came to our region for Ephphata Summit May,2021,He prayed for me and with used of Ephphata Sacramental, He declared me free. instantly i started walking to the Glory of God.
        </Text>
        <View style={styles.container}>
          <Avatar
              size={60}
              rounded
              source={require('../assets/images/adebisi-ify-ann.png')}
              containerStyle={{ backgroundColor: 'grey' }}
            >
            </Avatar>
          <Card.Title style={styles.title}>Adebisi Ify</Card.Title>
        </View>
      </Card>

      <Card>
        <Text  style={styles.text}>
        Halleluia!, Am very excited to tell the world what God of Fr. Sam has done in my life and family. As an American,i hardly believe in some spiritual things,especially in Church. But this very day i came in contact with this Priest,He touched me and gave me Ephphata Water,Ephphata oil and Balm to use them on myself for one week. I never in them,but after i used them, I was fully restored,my health,business and my whole family. Am very thankful to God.
        </Text>
        <View style={styles.container}>
          <Avatar
              size={60}
              rounded
              source={require('../assets/images/david-sandr.jpeg')}
              containerStyle={{ backgroundColor: 'grey' }}
            >
            </Avatar>
          <Card.Title style={styles.title}>David Walker S</Card.Title>
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
    marginVertical: 20,
    color: colors.accent,
  },
});


export default TestimonyScreen
