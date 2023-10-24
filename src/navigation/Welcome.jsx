import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import NameApp from "./screens/LogIn/NameApp";
import { useZustand } from "../store/zustand";
import { YOUR_DATA_PAGE } from "../utils/const";

function Welcome() {
  const { setThisPage } = useZustand();

  return (
    <SafeAreaView style={container}>
      <View>
        <NameApp />
        <Text style={description}>Tu espacio de apoyo</Text>
      </View>

      <TouchableOpacity
        onPress={() => setThisPage(YOUR_DATA_PAGE)}
        style={buttonContainer}
      >
        <Text style={buttonText}>COMIENZA</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000",
      rowGap: 60,
    },
    description: {
      color: "#FFF",
      fontSize: 24,
      textAlign: "center",
      //fontFamily: "//poppinsLight",
    },
    buttonContainer: {
      backgroundColor: "#2caba6",
      //borderRadius: 8,
      height: 40,
      width: "45%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 24,
      //fontFamily: "//poppinsSemiBold",
      letterSpacing: 1,
    },
  }),
  { buttonContainer, buttonText, description, container } = styles;
