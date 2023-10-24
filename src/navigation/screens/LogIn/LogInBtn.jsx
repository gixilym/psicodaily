import React from "react";
import { Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../../server/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { HOME_PAGE } from "../../../utils/const";

function LogInBtn(props) {
  const { atHeader = false, mail, password } = props,
    goTo = useNavigation();

  function logIn() {
    signInWithEmailAndPassword(auth, mail, password)
      .then(credentialUser => {
        Alert.alert("INICIASTE");
        console.log(credentialUser.user);
      })
      .then(() => goTo.navigate(HOME_PAGE))
      .catch(err => {
        Alert.alert(err.message);
        console.error(err.message);
      });
  }

  if (atHeader) {
    return (
      <TouchableOpacity
        onPress={() => goTo.navigate("LogIn")}
        style={logInContainer}
      >
        <Text style={logInText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={logIn} style={logInContainer}>
      <Text style={logInText}>Iniciar Sesión</Text>
    </TouchableOpacity>
  );
}

export default LogInBtn;

const styles = StyleSheet.create({
    logInContainer: {
      backgroundColor: "#2caba6",
      //borderRadius: 8,
      paddingHorizontal: 20,
      height: 40,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    logInText: {
      color: "#000000",
      //fontFamily: "//poppinsMedium",
      letterSpacing: 1,
    },
  }),
  { logInContainer, logInText } = styles;
