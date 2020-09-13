import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import { Text } from "../../components";
import { mediumGrey } from "../../constants/Colors";
import { width } from "../../constants/Layout";
import { useAppContext } from "../../context/Context";
import { Product, RootStackParamList } from "../../types";

interface CardProps {
  product: Product;
  navigation: StackNavigationProp<RootStackParamList, "Products">;
}

const WIDTH = width * 0.45;

const Card = ({ product, navigation }: CardProps) => {
  const { colors } = useAppContext();
  const { color, image, name } = product;
  return (
    <RectButton
      style={{
        ...styles.container,
        backgroundColor: colors.background,
      }}
      onPress={() => navigation.push("Product", { product })}
    >
      <View style={styles.imageContainer}>
        <SharedElement id={`item.${name}.photo`}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </SharedElement>
      </View>
      <Text variant="body" style={{ marginVertical: 20, alignSelf: "center" }}>
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
    marginBottom: (width * 0.1) / 3,
    elevation: 2,
    shadowColor: mediumGrey,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.26,
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
