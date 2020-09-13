import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";
import {
  RootStackParamList,
  AuthStackParamList,
  BottomTabParamList,
} from "../types";
import {
  Onboarding,
  HomeScreen,
  RecipesScreen,
  CartScreen,
  SettingsScreen,
  ProductScreen,
} from "../screens";
import { SignIn, SignUp } from "../screens/Authentication";
import CustomTab from "../components/CustomTab";
import { useAppContext } from "../context/Context";
import { StatusBar } from "react-native";

const RootStack = createSharedElementStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

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

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <CustomTab props={props} />}
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Recipes" component={RecipesScreen} />
      <BottomTab.Screen name="Cart" component={CartScreen} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator>
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
      <RootStack.Screen name="Main" component={BottomTabNavigation} />
      <RootStack.Screen
        name="Product"
        component={ProductScreen}
        sharedElementsConfig={(route) => {
          const { product } = route.params;
          return [`item.${product.name}.photo`];
        }}
        options={{
          gestureEnabled: false,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        }}
      />
    </RootStack.Navigator>
  );
};

const Navigation = () => {
  const { darkTheme } = useAppContext();
  return (
    <NavigationContainer>
      <RootNavigation />
      <StatusBar
        barStyle={darkTheme ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />
    </NavigationContainer>
  );
};

export default Navigation;
