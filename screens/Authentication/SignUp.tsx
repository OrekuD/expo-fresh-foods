import React from "react";
import { View, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../types";
import Form from "./Form";

const SignUp = ({
  navigation,
}: StackScreenProps<AuthStackParamList, "SignUp">) => {
  return (
    <View style={styles.container}>
      <Form isSignUp />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
