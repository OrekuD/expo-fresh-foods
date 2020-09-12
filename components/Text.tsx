import React, { ReactNode } from "react";
import { Text as RNText, TextStyle, StyleSheet, TextProps } from "react-native";
import { green, white, darkerGrey, mediumGrey } from "../constants/Colors";
import { useAppContext } from "../context/Context";

interface Props extends TextProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "body" | "body-small" | "link" | "button";
  color?: "green" | "white" | "mediumGrey" | "darkerGrey";
  style?: TextStyle;
  uppercase?: boolean;
}

const Text = ({
  children,
  variant = "body",
  color: textColor,
  style: textStyle,
  uppercase = false,
  ...props
}: Props) => {
  let style, color;
  const { colors } = useAppContext();

  switch (textColor) {
    case "green":
      color = green;
      break;
    case "white":
      color = white;
      break;
    case "mediumGrey":
      color = mediumGrey;
      break;
    case "darkerGrey":
      color = darkerGrey;
      break;
    default:
      color = colors.textPrimary;
      break;
  }

  switch (variant) {
    case "h1":
      style = styles.h1;
      break;
    case "h2":
      style = styles.h2;
      break;
    case "h3":
      style = styles.h3;
      break;
    case "body":
      style = styles.body;
      break;
    case "body-small":
      style = styles.bodySmall;
      break;
    default:
      break;
  }
  return (
    <RNText
      style={{
        ...style,
        color,
        textTransform: uppercase ? "uppercase" : "none",
        ...textStyle,
      }}
      {...props}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontFamily: "Acumin-SemiBold",
  },
  h2: {
    fontSize: 24,
    fontFamily: "Acumin-SemiBold",
  },
  h3: {
    fontSize: 20,
    fontFamily: "Acumin-SemiBold",
  },
  body: {
    fontFamily: "Acumin-Regular",
    fontSize: 16,
  },
  bodySmall: {
    fontFamily: "Acumin-Regular",
    fontSize: 14,
  },
  //   link: {
  //     fontFamily: "Acumin-Regular",
  //     fontSize: 14,
  //   },
  //   button: {
  //     fontFamily: "Acumin-Regular",
  //     fontSize: 14,
  //   },
});

export default Text;
