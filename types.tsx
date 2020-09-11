export type RootStackParamList = {
  Onboarding: undefined;
  Authentication: undefined;
  Main: undefined;
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
