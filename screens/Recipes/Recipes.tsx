import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components";
import { useAppContext } from "../../context/Context";

interface RecipesScreenProps {}

const RecipesScreen = (props: RecipesScreenProps) => {
  const { colors } = useAppContext();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Text>RecipesScreen</Text>
    </View>
  );
};

export default RecipesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
