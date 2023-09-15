import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function WelcomeMsg() {
  const emojiColor = "#b3a4a4";
  return (
    <View style={welcomeContainer}>
      <Text style={welcome}>Bienvenido, Gixi.{"\n"}Cómo te sientes hoy?</Text>
      <View style={emojis}>
        <Entypo name="emoji-happy" size={32} color={emojiColor} />
        <Entypo name="emoji-neutral" size={32} color={emojiColor} />
        <Entypo name="emoji-sad" size={32} color={emojiColor} />
        <FontAwesome5 name="sad-cry" size={32} color={emojiColor} />
      </View>
    </View>
  );
}

export default WelcomeMsg;

const styles = StyleSheet.create({
    welcomeContainer: {
      width: "90%",
      height: 150,
      borderRadius: 10,
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "space-evenly",
      backgroundColor: "rgba(80, 80, 80, 0.5)",
      backdropFilter: "blur(5px)",
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
    welcome: {
      fontSize: 24,

      width: "100%",
      color: "#B6EADA",
      fontFamily: "poppinsSemiBold",
      letterSpacing: 1.3,
    },
    emojis: {
      flexDirection: "row",
      width: "80%",
      alignItems: "center",
      justifyContent: "space-between",
    },
  }),
  { welcomeContainer, welcome, emojis } = styles;
