import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "../../components";
import { width } from "../../constants/Layout";
import { useAppContext } from "../../context/Context";
import { products } from "../../data/products";
import { RootStackParamList } from "../../types";
import Card from "./Card";

const Products = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Products">) => {
  const { colors } = useAppContext();
  const { top: paddingTop } = useSafeAreaInsets();

  const header = () => (
    <View style={{ ...styles.header, paddingTop }}>
      <BorderlessButton style={styles.backIcon} onPress={navigation.goBack}>
        <Ionicons
          name="md-arrow-round-back"
          color={colors.textPrimary}
          size={26}
        />
      </BorderlessButton>
      <Text variant="h1">Products</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={({ name }) => name}
      ListHeaderComponent={header}
      style={{ backgroundColor: colors.background }}
      numColumns={2}
      renderItem={({ item }) => <Card navigation={navigation} product={item} />}
      columnWrapperStyle={styles.row}
    />
  );
};

export default Products;

const styles = StyleSheet.create({
  header: {
    width,
    height: 120,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    width,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
