import { ImageRequireSource } from "react-native";

export type RootStackParamList = {
  Onboarding: undefined;
  Authentication: undefined;
  Main: undefined;
  Product: { product: Product };
};

export type BottomTabParamList = {
  Home: undefined;
  Recipes: undefined;
  Cart: undefined;
  Settings: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export interface OnboardingSlide {
  label?: string;
  key?: string;
}

export type AppContext = {
  darkTheme: boolean;
  colors: Colors;
  setDarkTheme: (value: boolean) => void;
};

export interface Colors {
  textPrimary: string;
  textSecondary: string;
  background: string;
}

export interface SvgProps {
  size: number;
  color?: string;
}

export interface Product {
  name: string;
  image: ImageRequireSource;
  color: string;
}

export interface Setting {
  name: string;
  Icon: ({ size, color }: SvgProps) => JSX.Element;
  iconSize: number;
}
