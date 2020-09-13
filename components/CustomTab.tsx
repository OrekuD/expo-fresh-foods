import {
  BottomTabBarProps,
  BottomTabBarOptions,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { green, mediumGrey } from "../constants/Colors";
import { useAppContext } from "../context/Context";
import { BottomTabParamList, SvgProps } from "../types";
import { Store, Cart, Recipes, Settings, PlusIcon } from "./Svgs";

interface CustomTabProps {
  props: BottomTabBarProps<BottomTabBarOptions>;
}

interface Tab {
  name: keyof BottomTabParamList | "Plus";
  Icon: ({ color, size }: SvgProps) => JSX.Element;
  index: number;
  iconSize: number;
}

const CustomTab = ({ props }: CustomTabProps) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const { navigation, state } = props;
  const { colors } = useAppContext();

  const screens: Tab[] = [
    {
      index: 0,
      name: "Home",
      Icon: Store,
      iconSize: 26,
    },
    {
      index: 1,
      name: "Recipes",
      Icon: Recipes,
      iconSize: 30,
    },
    {
      index: 5,
      name: "Plus",
      Icon: PlusIcon,
      iconSize: 26,
    },
    {
      index: 2,
      name: "Cart",
      Icon: Cart,
      iconSize: 28,
    },
    {
      index: 3,
      name: "Settings",
      Icon: Settings,
      iconSize: 28,
    },
  ];

  return (
    <View
      style={{
        ...styles.container,
        paddingBottom,
        backgroundColor: colors.background,
      }}
    >
      {screens.map(({ name, index, Icon, iconSize }) => {
        const color = state.index === index ? green : colors.textPrimary;
        if (index === 5) {
          return (
            <BorderlessButton style={styles.plusIcon} key={index}>
              <PlusIcon color="#ffffff" size={iconSize} />
            </BorderlessButton>
          );
        } else {
          return (
            <BorderlessButton
              onPress={() => navigation.navigate(name!)}
              style={{ ...styles.icon }}
              key={index}
            >
              <Icon size={iconSize} color={color} />
            </BorderlessButton>
          );
        }
      })}
    </View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  plusIcon: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
    borderRadius: 30,
    backgroundColor: mediumGrey,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});
