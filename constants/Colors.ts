import { Colors } from "../types";

const green = "#69CB79";
const lightGreen = "#F2FFF1";
const lighterGrey = "#F0F4F8";
const lightGrey = "#DBE2ED";
const grey = "#A6BCD0";
const mediumGrey = "#748A9D";
const darkGrey = "#4E5D6A";
const darkerGrey = "#404E5A";
const white = "#FFFFFF";

const dark: Colors = {
  background: darkerGrey,
  textPrimary: white,
  textSecondary: lighterGrey,
};

const light: Colors = {
  background: white,
  textPrimary: mediumGrey,
  textSecondary: darkerGrey,
};

export {
  green,
  lightGreen,
  lightGrey,
  lighterGrey,
  darkerGrey,
  darkGrey,
  grey,
  mediumGrey,
  white,
  dark,
  light,
};
