import React, { useState, useEffect } from "react";
import { Animated, StyleSheet, Easing, Switch as P } from "react-native";
import { mediumGrey, green } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

interface Props {
  defaultValue: boolean;
  onValueChange: (value: boolean) => void;
}

const Switch = ({ defaultValue, onValueChange }: Props) => {
  const [value, setValue] = useState<boolean>(defaultValue);
  const animationValue = new Animated.Value(0);

  useEffect(() => {
    if (value) {
      animation(1);
      onValueChange(value);
    } else {
      animation(0);
      onValueChange(value);
    }
  }, []);

  const animation = (toValue: number) => {
    Animated.timing(animationValue, {
      toValue,
      duration: 400,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (value) {
      animation(1);
      onValueChange(value);
    } else {
      animation(0);
      onValueChange(value);
    }
  }, [value]);

  const color = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [mediumGrey, green],
  });

  const translateX = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 17],
    extrapolate: "clamp",
  });

  return (
    <BorderlessButton
      style={{ width: 50, height: 30 }}
      onPress={() => setValue(!value)}
    >
      <Animated.View style={{ ...styles.container, borderColor: color }}>
        <Animated.View
          style={{
            ...styles.thumb,
            backgroundColor: color,
            transform: [{ translateX }],
          }}
        >
          {value ? (
            <Ionicons name="ios-checkmark" color="white" size={20} />
          ) : (
            <Ionicons name="ios-close" color="white" size={20} />
          )}
        </Animated.View>
      </Animated.View>
    </BorderlessButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 30,
    borderWidth: 1,
    borderColor: mediumGrey,
    borderRadius: 15,
    justifyContent: "flex-start",
  },
  thumb: {
    height: 28,
    width: 28,
    borderRadius: 15,
    backgroundColor: mediumGrey,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -1,
  },
});

export default Switch;
