import React from "react";
import { StyleSheet } from "react-native";
import Text from "../Text";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAppContext } from "../../context/Context";

interface TransparentButtonProps {
  label: number | string;
  onPress: () => void;
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
}

const TransparentButton = ({
  label,
  onPress,
  marginBottom = 0,
  marginTop = 0,
  marginVertical = 0,
}: TransparentButtonProps) => {
  const { colors } = useAppContext();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ ...styles.container, marginBottom, marginTop, marginVertical }}
      onPress={onPress}
    >
      <Text
        variant="h3"
        uppercase
        style={{ textAlign: "center", color: colors.textPrimary }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TransparentButton;

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
  },
});
