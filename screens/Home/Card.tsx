import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import { Text } from "../../components";
import { Product, RootStackParamList } from "../../types";

interface CardProps {
  product: Product;
  last: boolean;
  navigation: StackNavigationProp<RootStackParamList, "Main">;
}

const WIDTH = 180;

const Card = ({ product, last, navigation }: CardProps) => {
  const { color, image, name } = product;
  return (
    <RectButton
      style={{
        ...styles.container,
        backgroundColor: color,
        marginRight: last ? 0 : 20,
      }}
      onPress={() => navigation.push("Product", { product })}
    >
      <View style={styles.imageContainer}>
        <SharedElement id={`item.${product.name}.photo`}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </SharedElement>
      </View>
      <Text
        variant="body"
        style={{ marginVertical: 20, alignSelf: "center" }}
        color="white"
      >
        {name}
      </Text>
    </RectButton>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: WIDTH * 1.22,
    borderRadius: 12,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: WIDTH * 0.8,
    height: WIDTH * 0.8,
  },
});
