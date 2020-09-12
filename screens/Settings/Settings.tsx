import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "../../components";
import { Account, Bulb, Chat, Orders } from "../../components/Svgs";
import { useAppContext } from "../../context/Context";
import { Setting } from "../../types";
import Card from "./Card";

const settings: Setting[] = [
  {
    name: "Your account",
    Icon: Account,
    iconSize: 24,
  },
  {
    name: "Your orders",
    Icon: Orders,
    iconSize: 24,
  },
  {
    name: "live chat",
    Icon: Chat,
    iconSize: 24,
  },
];

const Settings = () => {
  const { colors } = useAppContext();
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.background,
        paddingTop,
      }}
    >
      <Text variant="h2" style={{ marginVertical: 30 }}>
        Settings
      </Text>
      {settings.map((setting, index) => (
        <Card setting={setting} key={index} />
      ))}
      <Card
        setting={{
          iconSize: 28,
          Icon: Bulb,
          name: "dark mode",
        }}
        theme
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
