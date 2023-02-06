import * as React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import {  Input, Card, Button, Icon } from 'react-native-elements';
import colors from '../shared/colors';


const PrayerScreen = () => {
  const [firstName, setFirstName] = React.useState('');

  return (
    <ScrollView>
      <Card>
        <Input
          focus
          placeholder="First Name"
          onChangeText={value => this.setState({ firstName: value })}
          style={styles.text}
        />
        <Input
          focus
          placeholder="Last Name"
          onChangeText={value => this.setState({ lastName: value })}
        />
        <Input
          focus
          placeholder="Phone Number"
          onChangeText={value => this.setState({ phoneNumber: value })}
        />
        <Input
          focus
          placeholder="Email Address"
          onChangeText={value => this.setState({ email: value })}
        />
        <Input
          focus
          inputStyle={styles.textArea}
          placeholder="Write Your Prayer Request Here"
          onChangeText={value => this.setState({ prayerRequest: value })}
        />

      <Button
        buttonStyle={styles.buttonStyle}
        title="Send"
      />
      </Card>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  textArea: {
    height: 150,
    borderColor: colors.secondary,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    borderColor: colors.secondary,
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: colors.secondary
  }
})

export default PrayerScreen
