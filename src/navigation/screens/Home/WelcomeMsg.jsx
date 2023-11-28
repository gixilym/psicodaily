import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useZustand } from "../../../store/zustand";
import SectionHome from "./SectionHome";
import { useNavigation } from "@react-navigation/native";
import { MOOD_PAGE } from "../../../utils/const";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

function WelcomeMsg() {
  const { nickNameUser } = useZustand(),
    goTo = useNavigation();

  return (
    <SectionHome
      contStyle={contStyle}
      pressAction={() => goTo.navigate(MOOD_PAGE)}
    >
      <Text style={welcome}>
        Bienvenido, {nickNameUser}.{"\n"}Cómo te sientes hoy?
      </Text>
      <View style={emojis}>
        <View style={emojiContainer}>
          <Entypo name="emoji-happy" size={32} color="#b9be65" />
        </View>

        <View style={emojiContainer}>
          <Entypo name="emoji-neutral" size={32} color="#789cce" />
        </View>

        <View style={emojiContainer}>
          <Entypo name="emoji-sad" size={32} color="#61966c" />
        </View>

        <View style={emojiContainer}>
          <FontAwesome5 name="sad-cry" size={32} color="#5c49c8" />
        </View>
      </View>
    </SectionHome>
  );
}

export default WelcomeMsg;

const styles = StyleSheet.create({
    contStyle: {
      height: 150,
      flexDirection: "column",
      justifyContent: "space-evenly",
      paddingTop: 0,
      paddingBottom: 0,
    },
    welcome: {
      fontSize: 24,
      width: "100%",
      color: "#B6EADA",
      //fontFamily: "//poppinsSemiBold",
      letterSpacing: 1.3,
    },
    emojis: {
      flexDirection: "row",
      width: "70%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    emojiContainer: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000",
      padding: "2em",
      borderRadius: 100,
    },
  }),
  { contStyle, welcome, emojis, emojiContainer } = styles;
