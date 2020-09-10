import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { Onboarding } from "../screens";

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <RootStack.Screen name="Onboarding" component={Onboarding} />
    </RootStack.Navigator>
  );
};

const Navigation = () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
);

export default Navigation;
