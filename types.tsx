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
