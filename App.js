import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { runTiming  } from "react-native-redash";

import CircularProgress from './circularprogress';

const { Clock } = Animated;

export default () => {
  const clock = new Clock();
  const config = {
    duration: 50 * 1000,
    toValue: 1,
    easing: Easing.linear,
  };
  return (
    <View style={styles.container}>
      <CircularProgress progress={runTiming (clock, 0, config)} />
    </View>
  );
}
;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});