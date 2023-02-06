import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  AppState, SafeAreaView, StatusBar,StyleSheet,
  View, FlatList, Image, Button, Linking
} from "react-native";
import {  Text } from 'react-native-elements';
import storeImages from '../shared/data';
import colors from '../shared/colors';


const Item = ({ title, source, url }) => (
  <View style={styles.item}>
    <Image source={source} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Button
      color={colors.secondary}
      title="Place Order"
      onPress={ ()=>{ Linking.openURL(url)}} 
    />
  </View>
);

const StoreScreen = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} source={item.source} url={item.url} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={storeImages}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    paddingVertical: 15,
    textAlign: 'center',
    color: colors.accent,
  },
  image: {
    height: 200,
    width: 300,
  },
});

export default StoreScreen
