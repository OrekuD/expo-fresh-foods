import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { height, width } from "../../constants/Layout";
import Slide from "./Slide";
import { OnboardingSlide, RootStackParamList } from "../../types";
import { mediumGrey } from "../../constants/Colors";
import { Text, MainButton, TransparentButton } from "../../components";
import RecipePreferences from "./RecipePreferences";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";

const slides: OnboardingSlide[] = [
  {
    label: "Quickly search and add healthy foods to your cart",
  },
  {
    label:
      "With one click you can add every ingredient for a recipe to your cart",
  },
  {
    key: "last",
  },
];

const Onboarding = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Onboarding">) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { top: paddingTop } = useSafeAreaInsets();
  const { colors } = useAppContext();
  const scrollRef = useRef<ScrollView>(null);

  return (
    <View
      style={{
        ...styles.container,
        paddingTop,
        backgroundColor: colors.background,
      }}
    >
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(
          event: NativeSyntheticEvent<NativeScrollEvent>
        ) => {
          setCurrentIndex(
            Math.round(event.nativeEvent.contentOffset.x / width)
          );
        }}
      >
        {slides.map((slide, index) => {
          if (slide.key) {
            return <RecipePreferences key={index} />;
          } else {
            return <Slide key={index} slide={slide} index={index} />;
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
        {currentIndex === 2 ? (
          <MainButton
            label="Get started"
            icon={
              <Ionicons name="md-arrow-round-forward" color="white" size={20} />
            }
            onPress={() => navigation.push("Authentication")}
          />
        ) : (
          <TransparentButton
            label="skip"
            onPress={() => {
              setCurrentIndex(2);
              scrollRef.current?.scrollTo({ x: width * 2 });
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomRow: {
    height: height * 0.25,
    width: width,
    justifyContent: "space-evenly",
  },
  pagination: {
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: mediumGrey,
    marginHorizontal: 5,
  },
});
