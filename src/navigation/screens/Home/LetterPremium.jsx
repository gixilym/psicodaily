import React from "react";
import { StyleSheet, Text, View } from "react-native";

function LetterPremium() {
  return (
    <View style={container}>
      <Text style={title}>Modo Premium</Text>
      <Text style={text}>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero s
        asdas asda das sada dasd ad werwer sada aaswerwer
      </Text>
    </View>
  );
}

export default LetterPremium;
const styles = StyleSheet.create({
    container: {
      width: "90%",
      height: 120,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(80, 80, 80, 0.5)",
      backdropFilter: "blur(5px)",
      border: "0px solid rgba(255, 255, 255, 0.2)",
      paddingHorizontal: 20,
      paddingVertical: 5,
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    },
    title: {
      fontSize: 24,
      letterSpacing: 1,
      textTransform: "uppercase",
      width: "100%",
      color: "#B6EADA",
      textTransform: "capitalize",
      fontFamily: "poppinsMedium",
    },
    text: {
      color: "#fff",
      fontFamily: "poppinsLight",
      width: "100%",
    },
  }),
  { container, text, title } = styles;
