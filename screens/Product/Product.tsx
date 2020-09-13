import React, { useEffect, useRef } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { View, StyleSheet, Image, ScrollView, Animated } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { height, width } from "../../constants/Layout";
import { RootStackParamList } from "../../types";
import { useAppContext } from "../../context/Context";
import { MainButton, Text } from "../../components";
import { Cart } from "../../components/Svgs";
import { green } from "../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Product = ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Product">) => {
  const {
    product: { name, image, color },
  } = route.params;
  const { colors } = useAppContext();
  const { top: paddingTop } = useSafeAreaInsets();
  const opacity = useRef(new Animated.Value(0)).current;
  const buttonTranslateY = useRef(new Animated.Value(30)).current;
  const descriptionLabelTranslateY = useRef(new Animated.Value(30)).current;
  const descriptionBodyTranslateY = useRef(new Animated.Value(30)).current;

  const config: Animated.TimingAnimationConfig = {
    toValue: 0,
    delay: 300,
    useNativeDriver: false,
  };

  useEffect(() => {
    Animated.stagger(100, [
      Animated.timing(opacity, {
        toValue: 1,
        delay: 300,
        useNativeDriver: false,
      }),
      Animated.timing(buttonTranslateY, config),
      Animated.timing(descriptionLabelTranslateY, config),
      Animated.timing(descriptionBodyTranslateY, config),
    ]).start();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={{ ...styles.container, paddingTop }}>
        <SharedElement id={`item.${name}.photo`}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </SharedElement>
        <Animated.View style={{ ...styles.content, opacity }}>
          <Animated.View
            style={{ transform: [{ translateY: buttonTranslateY }] }}
          >
            <MainButton
              label="add to cart"
              onPress={() => true}
              icon={<Cart size={34} color="#ffffff" />}
              marginVertical={20}
            />
          </Animated.View>
          <Animated.Text
            style={{
              ...styles.descriptionLabel,
              transform: [{ translateY: descriptionLabelTranslateY }],
            }}
          >
            Description
          </Animated.Text>
          <Animated.Text
            style={{
              ...styles.descriptionBody,
              color: colors.textPrimary,
              transform: [{ translateY: descriptionBodyTranslateY }],
            }}
          >
            Esse nostrud pariatur cupidatat cillum dolore. Incididunt ad
            pariatur aute eiusmod aliqua elit commodo in qui elit. Est consequat
            ut culpa exercitation sint est enim et incididunt. Aute mollit
            adipisicing aute id nostrud incididunt non incididunt incididunt.
            Nulla esse mollit commodo mollit Lorem amet anim id anim cillum.
          </Animated.Text>
        </Animated.View>
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height,
    alignItems: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.9,
    height: width * 0.9,
  },
  descriptionLabel: {
    marginVertical: 20,
    color: green,
    fontSize: 24,
    fontFamily: "Acumin-SemiBold",
  },
  descriptionBody: {
    fontFamily: "Acumin-Regular",
    fontSize: 16,
  },
});
