import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Header from "./Header";
import WelcomeMsg from "./WelcomeMsg";
import NewChat from "./NewChat";
import RecordChat from "./RecordChat";
import LetterPremium from "./LetterPremium";

function Home() {
  const test = [
    "Cómo puedo ser vegano?",
    "Cuál es la capital de Francia",
    "Tengo ganas de cagar en el baño",
    "Me duele el cuello de amor",
    "Aguanten los LGBT",
  ];

  return (
    <SafeAreaView style={container}>
      <Header />
      <WelcomeMsg />
      <NewChat />
      <RecordChat test={test} />
      <LetterPremium />
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      rowGap: 13,
      backgroundColor: "#030303",
      height: "100%",
      // backgroundImage:
      //   "linear-gradient(to right top, #030303, #030303, #030303, #030303, #030303, #0c0c0e, #131316, #17191c, #1e252a, #253338, #2b4144, #334f4e)",
    },
  }),
  { container } = styles;
