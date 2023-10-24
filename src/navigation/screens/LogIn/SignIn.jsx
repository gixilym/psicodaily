import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Alert } from "react-native";
import { auth } from "../../../../server/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignIn(props) {
  const { mail, password } = props;

  function createAccount() {
    createUserWithEmailAndPassword(auth, mail, password)
      .then(credentialUser => {
        Alert.alert("CUENTA CREADA");
        console.log(credentialUser.user);
      })
      .catch(err => Alert.alert(err.message));
  }

  return (
    <View style={container}>
      <TouchableOpacity
        onPress={() => Alert.alert("Olvidaste tu contraseña, jodete")}
      >
        <Text style={forgotPassword}>¿Olvidaste tu Contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={createAccount}>
        <Text style={registerButtonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    forgotPassword: {
      color: "#2caba6",
      marginTop: 0,
      fontSize: 16,
      //fontFamily: "//poppinsMedium",
    },
    registerButtonText: {
      color: "#2caba6",
      fontSize: 18,
      fontWeight: "bold",
      //fontFamily: "//poppinsBold",
      textTransform: "capitalize",
      fontStyle: "italic",
    },
  }),
  { container, registerButtonText, forgotPassword } = styles;
