import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components";

interface CartScreenProps {}

const CartScreen = (props: CartScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
