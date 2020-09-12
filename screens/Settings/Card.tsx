import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { darkGrey, lighterGrey } from "../../constants/Colors";
import { width } from "../../constants/Layout";
import { useAppContext } from "../../context/Context";
import { Setting } from "../../types";

interface CardProps {
  setting: Setting;
  changeTheme?: () => void;
}

const Card = ({ setting, changeTheme }: CardProps) => {
  const { darkTheme } = useAppContext();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? darkGrey : lighterGrey,
      }}
    >
      <Text style={{ flex: 1 }}>Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 60,
    borderRadius: 8,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  leftIcon: {
    marginHorizontal: 20,
  },
  rightIcon: {
    marginRight: 30,
  },
});
