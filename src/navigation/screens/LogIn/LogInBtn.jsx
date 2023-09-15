import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function LogInBtn(props) {
  const { signIn } = props;

  return (
    <TouchableOpacity onPress={signIn} style={logInContainer}>
      <Text style={logInText}>Iniciar Sesión</Text>
    </TouchableOpacity>
  );
}

export default LogInBtn;

const styles = StyleSheet.create({
    logInContainer: {
      backgroundColor: "#2caba6",
      borderRadius: 8,
      paddingHorizontal: 20,
      height: 40,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    logInText: {
      color: "#000000",
      fontFamily: "poppinsMedium",
      letterSpacing: 1,
    },
  }),
  { logInContainer, logInText } = styles;
