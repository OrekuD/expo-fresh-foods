import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Switch, Text } from "../../components";
import { darkGrey, green, lighterGrey } from "../../constants/Colors";
import { width } from "../../constants/Layout";
import { useAppContext } from "../../context/Context";
import { Setting } from "../../types";

interface CardProps {
  setting: Setting;
  theme?: boolean;
}

const Card = ({ setting, theme }: CardProps) => {
  const { darkTheme, colors, setDarkTheme } = useAppContext();
  const { Icon, iconSize, name } = setting;
  return (
    <RectButton
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? darkGrey : lighterGrey,
      }}
    >
      <View style={styles.leftIcon}>
        <Icon color={green} size={iconSize} />
      </View>
      <Text style={{ flex: 1, textTransform: "capitalize" }}>{name}</Text>
      <View style={styles.rightIcon}>
        {theme ? (
          <Switch
            defaultValue={darkTheme}
            onValueChange={(value) => setDarkTheme(value)}
          />
        ) : (
          <MaterialCommunityIcons
            name="chevron-right"
            size={26}
            color={colors.textPrimary}
          />
        )}
      </View>
    </RectButton>
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
    width: 60,
    alignItems: "center",
  },
  rightIcon: {
    marginRight: 20,
  },
});
