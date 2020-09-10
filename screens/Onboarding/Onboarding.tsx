import React, { useRef } from "react";
import { View, StyleSheet, Animated, Switch as RNSwitch } from "react-native";
import { height, width } from "../../constants/Layout";
import Slide from "./Slide";
import { OnboardingSlide } from "../../types";
import { mediumGrey } from "../../constants/Colors";
import { Text, Switch } from "../../components";
import { Close } from "../../components/Svgs";

const slides: OnboardingSlide[] = [
  {
    label: "Quickly search and add healthy foods to your cart",
    image: require("../../assets/images/graphic-onboarding-1.png"),
  },
  {
    label:
      "With one click you can add every ingredient for a recipe to your cart",
    image: require("../../assets/images/graphic-onboarding-2.png"),
  },
  {
    key: "last",
  },
];

const Onboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {slides.map((slide, index) => {
          if (slide.key) {
            return (
              <View style={{ width, padding: 100 }} key={slide.key}>
                <Text>Last</Text>
                <Close size={40} color="#000000" />
                <Switch defaultValue={true} onValueChange={() => true} />
              </View>
            );
          } else {
            return <Slide key={index} slide={slide} />;
          }
        })}
      </Animated.ScrollView>
      <View style={styles.bottomRow}>
        <View style={styles.pagination}>
          {slides.map((_, index) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.5, 1, 0.5],
              extrapolate: "clamp",
            });

            return (
              <Animated.View style={{ ...styles.dot, opacity }} key={index} />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bottomRow: {
    height: height * 0.3,
    width: width,
    // backgroundColor: "red",
  },
  pagination: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 25,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: mediumGrey,
    marginHorizontal: 5,
  },
});
