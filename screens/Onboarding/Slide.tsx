import React from "react";
import { View, StyleSheet } from "react-native";
import { OnboardingSlide } from "../../types";
import { width } from "../../constants/Layout";
import { Text } from "../../components";
import { useAppContext } from "../../context/Context";
import { Onboarding, Onboarding2 } from "../../components/Svgs";
import { darkGrey, lightGreen } from "../../constants/Colors";

interface Props {
  slide: OnboardingSlide;
  index?: number;
}

const IMAGE_SIZE = width * 0.8;

const Slide = ({ slide: { label }, index }: Props) => {
  const { colors, darkTheme } = useAppContext();
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 40 }}>
        {index === 0 ? (
          <Onboarding
            size={IMAGE_SIZE}
            color={darkTheme ? darkGrey : lightGreen}
          />
        ) : (
          <Onboarding2
            size={IMAGE_SIZE}
            color={darkTheme ? darkGrey : lightGreen}
          />
        )}
      </View>
      <Text
        variant="h3"
        style={{
          width: width * 0.7,
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Slide;
