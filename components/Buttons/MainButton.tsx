import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import Text from "../Text";
import { width } from "../../constants/Layout";
import { green } from "../../constants/Colors";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

interface MainButtonProps {
  label: number | string;
  onPress: () => void;
  icon?: ReactNode;
}

const MainButton = ({ label, onPress, icon }: MainButtonProps) => {
  return (
    <RectButton style={styles.container} onPress={onPress}>
      {icon && icon}
      <Text
        color="white"
        uppercase
        variant="h3"
        style={{ marginLeft: icon ? 10 : 0 }}
      >
        {label}
      </Text>
    </RectButton>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 60,
    borderRadius: 30,
    backgroundColor: green,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
