import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "../../components";
import { Account, Chat, Orders } from "../../components/Svgs";
import { useAppContext } from "../../context/Context";
import { Setting } from "../../types";

const settings: Setting[] = [
  {
    name: "Your account",
    icon: Account,
    iconSize: 24,
  },
  {
    name: "Your orders",
    icon: Orders,
    iconSize: 24,
  },
  {
    name: "live chat",
    icon: Chat,
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
