import { StyleSheet, View, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from './colors';

const Header = ( { navigation } ) => {

  const toggleDrawer = () => {navigation.toggleDrawer()};

  return (
    <View style={styles.header}>
      <MaterialCommunityIcons 
        name="menu"
        size={26}
        color={colors.success}
        onPress={toggleDrawer}
      />
    </View>
  );
}

  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: '100%',
      width: '100%',
    },
  })
export default Header
