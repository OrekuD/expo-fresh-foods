import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components";

interface RecipesScreenProps {}

const RecipesScreen = (props: RecipesScreenProps) => {
  return (
    <View style={styles.container}>
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
