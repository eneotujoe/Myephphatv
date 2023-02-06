import React, { useState, useEffect, useRef, useCallback } from "react";
import { AppState, ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Text, Image } from 'react-native-elements';
// import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from 'react-native-webview';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../shared/colors';


const HomeScreen = ({ navigation }) => {
  const appState = useRef(AppState.currentState);
  const [playing, setPlaying] = useState(false);


  // useEffect(() => {
  //   const subscription = AppState.addEventListener("change", nextAppState => {
  //     if (
  //       appState.current.match(/inactive|background/) &&
  //       nextAppState === "active"
  //     ) {
  //       setPlaying(true);
  //       console.log("App has come to the foreground!");
  //     }

  //     appState.current = nextAppState;
  //     console.log("AppState", appState.current);
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);
  const onStateChange = useCallback((state) => {
    if (state === "playing") {
      setPlaying(true);
      console.log('video has ended');
    }
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <Image
          containerStyle={styles.img}
          source={require('../assets/images/img-2.png')}
        />
      </View>
{/* 
      <View style={{marginVertical: 20}}>
        <Text style={styles.text}>Livestream</Text>
        <YoutubePlayer
          height={220}
          play={playing}
          videoId={'IWQizBJR19Q'}
          showinfo={0}
          onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={() => console.log(playing)} />
      </View> */}

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  text: {
    color: '#ffffff',
    marginVertical: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
    textAlign: "center",
  },
  img: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
});


export default HomeScreen
