import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList, AuthStackParamList } from "../types";
import { Onboarding, Home } from "../screens";
import { SignIn, SignUp } from "../screens/Authentication";

const RootStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </AuthStack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <RootStack.Screen name="Onboarding" component={Onboarding} />
      <RootStack.Screen name="Authentication" component={AuthNavigation} />
      <RootStack.Screen name="Main" component={Home} />
    </RootStack.Navigator>
  );
};

const Navigation = () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
);

export default Navigation;
