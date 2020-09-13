import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components";
import { useAppContext } from "../../context/Context";

interface CartScreenProps {}

const CartScreen = (props: CartScreenProps) => {
  const { colors } = useAppContext();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
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
