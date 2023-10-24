import React from "react";
import { StyleSheet, Text } from "react-native";
import SectionHome from "./SectionHome";

function LetterPremium() {
  return (
    <SectionHome contStyle={contStyle}>
      <Text style={title}>Modo Premium</Text>
      <Text style={text}>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero s
        asdas asda das sada dasd ad werwer sada aaswerwer
      </Text>
    </SectionHome>
  );
}

export default LetterPremium;
const styles = StyleSheet.create({
    contStyle: {
      paddingTop: 0,
      paddingBottom: 5,
      justifyContent: "center",
      rowGap: 5,
    },
    title: {
      fontSize: 24,
      letterSpacing: 1,
      textTransform: "uppercase",
      width: "100%",
      color: "#B6EADA",
      textTransform: "capitalize",
      //fontFamily: "//poppinsMedium",
    },
    text: {
      color: "#fff",
      //fontFamily: "//poppinsLight",
      width: "100%",
    },
  }),
  { contStyle, text, title } = styles;
