import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import BackgroundImage from "../../BackgroundImage";
import Header from "./Header";
import WelcomeMsg from "./WelcomeMsg";
import Diary from "./Diary";
import RecordChat from "./RecordChat";
import LetterPremium from "./LetterPremium";

function Home() {
  return (
    <BackgroundImage>
      <SafeAreaView style={container}>
        <Header />
        <WelcomeMsg />
        <Diary />
        <RecordChat />
        <LetterPremium />
      </SafeAreaView>
    </BackgroundImage>
  );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      rowGap: 13,
    },
  }),
  { container } = styles;
