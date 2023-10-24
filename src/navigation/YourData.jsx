import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useZustand } from "../store/zustand";

function YourData() {
  const { setNickNameUser, setThisPage } = useZustand(),
    [name, setName] = useState("");

  function validateName(userName) {
    const length = name.length;

    if (length === 0) {
      Alert.alert("Tu nombre no puede estar vacío");
      return;
    }
    if (length > 15) {
      Alert.alert(`Máximo 15 caracteres. Tu nombre tiene ${length} caracteres`);
      return;
    }

    if (length > 0 && length < 16) {
      saveName(userName);
    }
  }

  function saveName(userName) {
    setNickNameUser(userName);
    setThisPage();

    /*
    const reqOptions = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName }),
    };
    return await fetch("http://10.0.0.125:3001/savename", reqOptions)
      .then(res => res.json())
      .then(data => setNickNameUser(data))
      .then(() => setThisPage())
      .catch(err => Alert.alert(err));
    */
  }

  return (
    <KeyboardAvoidingView style={keyboard} enabled behavior="padding">
      <SafeAreaView style={container}>
        <Text style={title}>
          <Text style={span}>¿</Text>
          Cómo quieres que te llame
          <Text style={span}>?</Text>
        </Text>

        <TextInput
          style={input}
          onChangeText={name => setName(name)}
          placeholder="Ingresa tu nombre o apodo"
          placeholderTextColor="#8f8f8f"
        />

        <TouchableOpacity
          onPress={() => validateName(name)}
          style={btnContainer}
        >
          <Text style={btnText}>Siguiente</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default YourData;

const styles = StyleSheet.create({
    keyboard: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000",
      rowGap: 15,
    },
    title: {
      fontSize: 22,
      textAlign: "center",
      color: "#fff",
      //fontFamily: "//poppinsSemiBold",
      letterSpacing: 0.8,
    },
    input: {
      width: "80%",
      height: 45,
      borderColor: "#2caba6",
      borderWidth: 1,
      //borderRadius: 5,
      paddingHorizontal: 10,
      color: "#fff",
      //fontFamily: "//poppinsRegular",
    },
    btnContainer: {
      marginTop: 50,
      backgroundColor: "#2caba6",
      //borderRadius: 8,
      height: 40,
      width: "38%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    btnText: {
      color: "#fff",
      fontSize: 20,
      //fontFamily: "//poppinsSemiBold",
      letterSpacing: 1,
    },
    span: {
      color: "#2caba6",
      fontSize: 30,
    },
  }),
  { container, title, input, btnContainer, btnText, span, keyboard } = styles;
