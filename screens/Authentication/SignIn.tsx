import React from "react";
import { View, StyleSheet } from "react-native";
import Form from "./Form";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../types";

const SignIn = ({
  navigation,
}: StackScreenProps<AuthStackParamList, "SignIn">) => {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
