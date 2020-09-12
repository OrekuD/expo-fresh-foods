import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RootStackParamList } from "../../types";

const Product = ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Product">) => {
  const {
    product: { name, image, color },
  } = route.params;
  return (
    <View style={styles.container}>
      <Text>Product</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {},
});
