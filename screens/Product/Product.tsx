import React, { useEffect, useRef } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
  TouchableOpacity,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { height, width } from "../../constants/Layout";
import { RootStackParamList } from "../../types";
import { useAppContext } from "../../context/Context";
import { MainButton, Text } from "../../components";
import { Cart } from "../../components/Svgs";
import { darkGrey, green, lighterGrey } from "../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const IMAGE_SIZE = width * 0.9;

const Product = ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Product">) => {
  const {
    product: { name, image, price },
  } = route.params;
  const { colors, darkTheme } = useAppContext();
  const { top: paddingTop } = useSafeAreaInsets();
  const opacity = useRef(new Animated.Value(0)).current;
  const buttonTranslateY = useRef(new Animated.Value(30)).current;
  const descriptionLabelTranslateY = useRef(new Animated.Value(30)).current;
  const descriptionBodyTranslateY = useRef(new Animated.Value(30)).current;
  const originLabelTranslateY = useRef(new Animated.Value(30)).current;
  const originBodyTranslateY = useRef(new Animated.Value(30)).current;
  const priceTranslateY = useRef(new Animated.Value(30)).current;

  const config: Animated.TimingAnimationConfig = {
    toValue: 0,
    useNativeDriver: false,
  };

  useEffect(() => {
    Animated.stagger(100, [
      Animated.timing(opacity, {
        toValue: 1,
        delay: 300,
        useNativeDriver: false,
      }),
      Animated.timing(priceTranslateY, config),
      Animated.timing(buttonTranslateY, config),
      Animated.timing(descriptionLabelTranslateY, config),
      Animated.timing(descriptionBodyTranslateY, config),
      Animated.timing(originLabelTranslateY, config),
      Animated.timing(originBodyTranslateY, config),
    ]).start();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={{ ...styles.container, paddingTop, paddingBottom: 50 }}>
        <TouchableOpacity
          onPress={navigation.goBack}
          activeOpacity={0.8}
          style={styles.backIcon}
        >
          <Ionicons
            name="md-arrow-round-back"
            color={colors.textPrimary}
            size={26}
          />
        </TouchableOpacity>
        <SharedElement id={`item.${name}.photo`}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </SharedElement>
        <Animated.View
          style={{
            ...styles.priceContainer,
            backgroundColor: darkTheme ? darkGrey : lighterGrey,
            transform: [{ translateY: priceTranslateY }],
          }}
        >
          <Text style={{ ...styles.label, color: colors.textPrimary }}>
            {name}
          </Text>
          <Text style={{ ...styles.label, color: colors.textPrimary }}>
            ${price}
          </Text>
        </Animated.View>
        <Animated.View style={{ ...styles.content, opacity }}>
          <Animated.View
            style={{ transform: [{ translateY: buttonTranslateY }] }}
          >
            <MainButton
              label="add to cart"
              onPress={() => true}
              icon={<Cart size={30} color="#ffffff" />}
              marginVertical={20}
            />
          </Animated.View>
          <Animated.Text
            style={{
              ...styles.label,
              transform: [{ translateY: descriptionLabelTranslateY }],
            }}
          >
            Description
          </Animated.Text>
          <Animated.Text
            style={{
              ...styles.body,
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
          <Animated.Text
            style={{
              ...styles.label,
              transform: [{ translateY: originLabelTranslateY }],
            }}
          >
            Origin
          </Animated.Text>
          <Animated.Text
            style={{
              ...styles.body,
              color: colors.textPrimary,
              transform: [{ translateY: originBodyTranslateY }],
            }}
          >
            Ad sunt ad pariatur ullamco. Officia adipisicing consectetur ea
            veniam commodo eiusmod nulla eiusmod. Velit magna quis cillum quis
            quis tempor qui culpa. Tempor do consectetur cupidatat commodo nisi
            labore labore qui officia laboris duis. Magna consequat aliqua
            reprehenderit culpa eiusmod et culpa tempor labore ad duis et.
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
    position: "relative",
  },
  backIcon: {
    margin: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  priceContainer: {
    width: IMAGE_SIZE,
    height: 60,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginTop: -70,
  },
  label: {
    marginVertical: 20,
    color: green,
    fontSize: 24,
    lineHeight: 28,
    fontFamily: "Acumin-SemiBold",
  },
  body: {
    fontFamily: "Acumin-Regular",
    fontSize: 16,
    lineHeight: 18,
  },
});
