import { ImageRequireSource } from "react-native";

export type RootStackParamList = {
  Onboarding: undefined;
  Authentication: undefined;
};

export type AuthenticationParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export interface OnboardingSlide {
  label?: string;
  image?: ImageRequireSource;
  key?: string;
}
