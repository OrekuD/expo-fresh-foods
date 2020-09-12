import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "../../components";
import { width } from "../../constants/Layout";
import { useAppContext } from "../../context/Context";

const IMAGE_SIZE = width * 0.75;

const Home = () => {
  const { colors } = useAppContext();
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={{ ...styles.container, paddingTop: top * 2 }}>
        <View style={styles.header}></View>
        <Image
          source={require("../../assets/images/broccoli.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text variant="h1" style={{ alignSelf: "center", marginVertical: 10 }}>
          Vegetables
        </Text>
        <Text variant="body" style={{ alignSelf: "center" }}>
          Browse
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  header: {
    height: 70,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    alignSelf: "center",
  },
});
