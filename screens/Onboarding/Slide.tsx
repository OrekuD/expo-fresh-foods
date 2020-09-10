import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { OnboardingSlide } from "../../types";
import { width } from "../../constants/Layout";
import { Text } from "../../components";

interface Props {
  slide: OnboardingSlide;
}

const IMAGE_SIZE = width * 0.8;

const Slide = ({ slide: { image, label } }: Props) => (
  <View style={styles.container}>
    <Image source={image!} resizeMode="contain" style={styles.image} />
    <Text
      variant="h3"
      color="mediumGrey"
      style={{ width: width * 0.7, textAlign: "center" }}
    >
      {label}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginBottom: 40,
  },
});

export default Slide;
