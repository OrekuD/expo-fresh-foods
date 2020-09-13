import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import Text from "../Text";
import { width } from "../../constants/Layout";
import { green } from "../../constants/Colors";
import { RectButton } from "react-native-gesture-handler";

interface MainButtonProps {
  label: number | string;
  onPress: () => void;
  icon?: ReactNode;
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
}

const MainButton = ({
  label,
  onPress,
  icon,
  marginBottom = 0,
  marginTop = 0,
  marginVertical = 0,
}: MainButtonProps) => {
  return (
    <RectButton
      style={{ ...styles.container, marginBottom, marginTop, marginVertical }}
      onPress={onPress}
    >
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
