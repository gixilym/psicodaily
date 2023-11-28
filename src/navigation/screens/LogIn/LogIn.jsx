import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import LogInBtn from "./LogInBtn.jsx";
import GoogleBtn from "./GoogleBtn.jsx";
import FacebookBtn from "./FacebookBtn.jsx";
import Divider from "./Divider.jsx";
import SignIn from "./SignIn.jsx";
import NameApp from "./NameApp.jsx";
import BackgroundImage from "../../BackgroundImage.jsx";
import { Entypo as EyeIcon } from "@expo/vector-icons";

function LogIn() {
  const [mail, setMail] = useState(""),
    [password, setPassword] = useState(""),
    [shownPass, setShownPass] = useState(true);

  function selectEye() {
    return shownPass ? (
      <EyeIcon name="eye" size={24} color="#8f8f8f" />
    ) : (
      <EyeIcon name="eye-with-line" size={24} color="#8f8f8f" />
    );
  }

  return (
    <BackgroundImage>
      <SafeAreaView style={sfStyle}>
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
              placeholder="Mail"
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
    sfStyle: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      rowGap: 50,
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
      borderRadius: 18,
      paddingHorizontal: 20,
      paddingVertical: 15,
      fontSize: 16,
      color: "#ffffff",
      width: "100%",
      height: 50,
    },
    loginButton: {
      backgroundColor: "#2196F3",
      borderRadius: 18,
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
    sfStyle,
    input,
    inputContainer,
    eyeContainer,
    inputEyeContainer,
    containerLogs,
  } = styles;
