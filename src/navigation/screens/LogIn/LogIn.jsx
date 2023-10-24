import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import LogInBtn from "./LogInBtn";
import GoogleBtn from "./GoogleBtn";
import FacebookBtn from "./FacebookBtn";
import Divider from "./Divider";
import SignIn from "./SignIn";
import NameApp from "./NameApp";
import { Entypo } from "@expo/vector-icons";
import BackgroundImage from "../../BackgroundImage";

function LogIn() {
  const [mail, setMail] = useState(""),
    [password, setPassword] = useState(""),
    [shownPass, setShownPass] = useState(true);

  function selectEye() {
    return shownPass ? (
      <Entypo name="eye" size={24} color="#8f8f8f" />
    ) : (
      <Entypo name="eye-with-line" size={24} color="#8f8f8f" />
    );
  }

  return (
    <BackgroundImage>
      <SafeAreaView style={container}>
        <NameApp />

        <View style={containerLogs}>
          <View style={inputContainer}>
            <GoogleBtn />
            <FacebookBtn />
          </View>

          <Divider />

          <View style={inputContainer}>
            <TextInput
              onChangeText={mail => setMail(mail)}
              style={input}
              placeholder="Ingrese su email"
              placeholderTextColor="#9d9d9d"
            />

            <View style={inputEyeContainer}>
              <TextInput
                onChangeText={password => setPassword(password)}
                style={input}
                placeholder="Contraseña"
                placeholderTextColor="#9d9d9d"
                secureTextEntry={shownPass}
              />

              <TouchableOpacity
                onPress={() => setShownPass(!shownPass)}
                style={eyeContainer}
              >
                {selectEye()}
              </TouchableOpacity>
            </View>

            <LogInBtn mail={mail} password={password} />
          </View>
        </View>
        <SignIn mail={mail} password={password} />
      </SafeAreaView>
    </BackgroundImage>
  );
}

export default LogIn;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
      rowGap: 40,
      paddingTop: 130,
      width: "90%",
    },
    containerLogs: {
      width: "85%",
      alignItems: "center",
      justifyContent: "center",
      rowGap: 13,
    },
    inputContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      rowGap: 15,
    },
    input: {
      backgroundColor: "rgba(55, 55, 55, 0.5)",
      //borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 15,
      fontSize: 16,
      color: "#ffffff",
      width: "100%",
      height: 50,
    },
    loginButton: {
      backgroundColor: "#2196F3",
      //borderRadius: 10,
      padding: 10,
    },
    loginButtonText: {
      color: "#ffffff",
      fontSize: 18,
      textAlign: "center",
    },

    eyeContainer: {
      position: "absolute",
      width: 50,
      height: 50,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    inputEyeContainer: {
      position: "relative",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  }),
  {
    container,

    input,
    inputContainer,

    eyeContainer,
    inputEyeContainer,
    containerLogs,
  } = styles;
