import React from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import { Padlock, Mail, Account } from "../../components/Svgs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, MainButton, TransparentButton } from "../../components";
import { width, height } from "../../constants/Layout";
import { useAppContext } from "../../context/Context";
import { darkGrey, lighterGrey, grey } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { BorderlessButton } from "react-native-gesture-handler";
import { RootStackParamList } from "../../types";
import { useNavigation } from "@react-navigation/native";

interface FormProps {
  isSignUp?: boolean;
}

const Form = ({ isSignUp }: FormProps) => {
  const { top, bottom } = useSafeAreaInsets();
  const { colors, darkTheme } = useAppContext();
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View
        style={{
          ...styles.container,
          paddingTop: isSignUp ? 30 : top * 3,
          paddingBottom: bottom * 2,
        }}
      >
        {isSignUp && (
          <BorderlessButton
            onPress={navigation.goBack}
            style={styles.closeIcon}
          >
            <Ionicons name="md-close" color={colors.textPrimary} size={26} />
          </BorderlessButton>
        )}
        <Text
          variant="h2"
          color="green"
          style={{ marginVertical: isSignUp ? 50 : 70, textAlign: "center" }}
        >
          {isSignUp ? "Create Account" : "Sign In"}
        </Text>
        <View
          style={{
            flex: 1,
          }}
        >
          {isSignUp && (
            <View
              style={{
                ...styles.textInputContainer,
                backgroundColor: darkTheme ? darkGrey : lighterGrey,
              }}
            >
              <View style={styles.icon}>
                <Account size={22} color={grey} />
              </View>
              <TextInput
                style={{ ...styles.textInput }}
                placeholder="Full Name"
                placeholderTextColor={grey}
              />
            </View>
          )}
          <View
            style={{
              ...styles.textInputContainer,
              backgroundColor: darkTheme ? darkGrey : lighterGrey,
            }}
          >
            <View style={styles.icon}>
              <Mail size={22} color={grey} />
            </View>
            <TextInput
              style={{ ...styles.textInput }}
              placeholder="Email"
              placeholderTextColor={grey}
            />
          </View>
          <View
            style={{
              ...styles.textInputContainer,
              backgroundColor: darkTheme ? darkGrey : lighterGrey,
            }}
          >
            <View style={styles.icon}>
              <Padlock size={22} color={grey} />
            </View>
            <TextInput
              style={{ ...styles.textInput }}
              placeholder="Password"
              placeholderTextColor={grey}
            />
          </View>
          {!isSignUp && (
            <Text
              variant="body"
              style={{ color: grey, marginVertical: 10, textAlign: "center" }}
            >
              Forgot password?
            </Text>
          )}
        </View>
        <View style={{ marginBottom: 20 }}>
          <MainButton
            label={isSignUp ? "create account" : "sign in"}
            icon={
              <Ionicons name="md-arrow-round-forward" color="white" size={20} />
            }
            onPress={() => navigation.navigate("Main")}
            marginBottom={20}
          />
          <TransparentButton
            label={isSignUp ? "sign up" : "create account"}
            onPress={() => navigation.navigate(isSignUp ? "SignIn" : "SignUp")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    position: "relative",
  },
  closeIcon: {
    position: "absolute",
    top: 30,
    right: 30,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainer: {
    width: width * 0.9,
    height: 60,
    alignSelf: "center",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  textInput: {
    flex: 1,
    paddingRight: 10,
    fontSize: 18,
  },
  icon: {
    marginHorizontal: 20,
  },
});
