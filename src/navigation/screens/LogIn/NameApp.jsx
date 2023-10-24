import React from "react";
import { Text, StyleSheet } from "react-native";

function NameApp() {
  return (
    <Text style={nameApp}>
      <Text style={span}>P</Text>sico
      <Text style={span}>D</Text>aily
    </Text>
  );
}

export default NameApp;

const styles = StyleSheet.create({
    nameApp: {
      fontSize: 60,
      //fontFamily: "//poppinsBold",
      color: "#ffffff",
    },
    span: {
      color: "#2caba6",
      //fontFamily: "//poppinsBold",
    },
  }),
  { nameApp, span } = styles;
