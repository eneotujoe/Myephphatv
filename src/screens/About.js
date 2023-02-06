import * as React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import {  Text, Card, } from 'react-native-elements';
import colors from '../shared/colors';


const AboutScreen = () => {
  return (
    <ScrollView>
      <Card>
        <Card.Image
          style={styles.image}
          source={require('../assets/images/img-1.png')}
        />
        <Card.Title style={styles.text}>ABOUT REV. FATHER SAMUEL GREGORY UMANAH CM</Card.Title>
        <Text style={styles.text}>
          Rev. Fr. Samuel Ekemini-Obong Gregory Umanah CM is a Catholic Priest of the Congregation of the Mission, (Vincentians) Nigeria Province, and currently an Associate Pastor of St. Kizito Catholic Church, Kuje FCT-Abuja
          Fr Sam’s response to the call of God in his life is via reaching out to the multitude who are in need of Christ: the oppressed, the poor, the sick and the needy. He is blessed with the uncommon grace of intercession, prophesy, healing and deliverance from bondages. Through his ministry many families and communities have been delivered and restored to God. His Apostolic outreach has brought liberation to many in different countries including United States, United Kingdom, South Africa, Turkey and Kenya.
        </Text>
      </Card>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    padding: 0,
    marginBottom: 15
  },
  text: {
    marginBottom: 10,
    color: colors.accent,
  },
});

export default AboutScreen
