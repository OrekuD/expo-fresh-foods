import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, Switch } from "../../components";
import { width } from "../../constants/Layout";
import { useAppContext } from "../../context/Context";

interface RecipePreferencesProps {}

const preferences = [
  {
    name: "All",
    defaultValue: false,
  },
  {
    name: "Vegan",
    defaultValue: true,
  },
  {
    name: "Vegetarian",
    defaultValue: true,
  },
  {
    name: "Paleo",
    defaultValue: false,
  },
  {
    name: "Keto",
    defaultValue: true,
  },
  {
    name: "Low Carb",
    defaultValue: false,
  },
];

const RecipePreferences = () => {
  const {
    colors: { textPrimary },
  } = useAppContext();
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text
          variant="h3"
          style={{
            marginVertical: 20,
            alignSelf: "center",
            color: textPrimary,
          }}
        >
          Recipe Preferences
        </Text>
        <FlatList
          data={preferences}
          keyExtractor={({ name }) => name}
          renderItem={({ item: { name, defaultValue } }) => (
            <View style={styles.item}>
              <Text variant="body" style={{ color: textPrimary }}>
                {name}
              </Text>
              <Switch defaultValue={defaultValue} onValueChange={() => {}} />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Text
        variant="h3"
        style={{
          textAlign: "center",
          width: "85%",
          alignSelf: "center",
          color: textPrimary,
        }}
      >
        Tailor your Recipes feed exactly how you like it
      </Text>
    </View>
  );
};

export default RecipePreferences;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  item: {
    width: "100%",
    height: 45,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
