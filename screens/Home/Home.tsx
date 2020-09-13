import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "../../components";
import { Search } from "../../components/Svgs";
import { width } from "../../constants/Layout";
import { useAppContext } from "../../context/Context";
import { products } from "../../data/products";
import { RootStackParamList } from "../../types";
import Card from "./Card";

const IMAGE_SIZE = width * 0.75;

const Home = ({ navigation }: StackScreenProps<RootStackParamList, "Main">) => {
  const { colors } = useAppContext();
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={{ ...styles.container, paddingTop }}>
        <View style={styles.header}>
          <Text
            style={{
              flex: 1,
              textAlign: "center",
            }}
            variant="h2"
          >
            Store
          </Text>
          <BorderlessButton style={styles.searchIcon}>
            <Search color={colors.textPrimary} size={20} />
          </BorderlessButton>
        </View>
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginVertical: 30, paddingHorizontal: 20 }}
        >
          {products.slice(0, 5).map((product, index) => (
            <Card
              product={product}
              key={index}
              last={index === products.length - 1}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    alignSelf: "center",
  },
  searchIcon: {
    position: "absolute",
    right: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
