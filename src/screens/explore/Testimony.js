import React, { useState, useEffect, useRef, useCallback } from "react";
import { AppState, SafeAreaView, StatusBar, StyleSheet, View, Text, FlatList, Image } from "react-native";
import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';

import storeImages from '../../shared/data';
import colors from '../../shared/colors';


const TestimonyScreen = () => {

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  // getYoutubeMeta('BvwcR8kZMFs').then(meta => {
  //   Alert.alert(meta.html);
  // });


  const Item = ({ title, source }) => (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"BvwcR8kZMFs"}
        onChangeState={onStateChange}
        // webViewStyle={{ opacity: 0.99, width: 420, height: 680, flex: 1, zIndex: 1 }}
      />
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} source={item.source} />
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
    fontSize: 32,
  },
  image: {
    height: 200,
    width: 300,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default TestimonyScreen
