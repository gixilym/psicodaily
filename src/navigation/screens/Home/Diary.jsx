import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DIARY_PAGE } from "../../../utils/const";
import { useZustand } from "../../../store/zustand";
import SectionHome from "./SectionHome";

function Diary() {
  const goTo = useNavigation(),
    { diaryTexts } = useZustand();

  return (
    <SectionHome
      pressAction={() => goTo.navigate(DIARY_PAGE)}
      contStyle={contStyle}
    >
      <Text style={titleStyle}>Diario</Text>
      <Text style={textStyle}>{diaryTexts}</Text>
    </SectionHome>
  );
}

export default Diary;

const styles = StyleSheet.create({
    contStyle: {
      justifyContent: "center",
      rowGap: 5,
    },
    titleStyle: {
      fontSize: 24,
      letterSpacing: 1,
      textTransform: "uppercase",
      width: "100%",
      color: "#B6EADA",
      textTransform: "capitalize",
      //fontFamily: "//poppinsMedium",
    },
    textStyle: {
      color: "#fff",
      //fontFamily: "//poppinsLight",
    },
  }),
  { contStyle, textStyle, titleStyle } = styles;
