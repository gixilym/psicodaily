import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import BackgroundImage from "../../BackgroundImage";
import { BackToHome } from "../../../utils/utilities";
import { useZustand } from "../../../store/zustand";

function DiaryScreen() {
  const { diaryTexts, setDiaryTexts } = useZustand();

  return (
    <BackgroundImage>
      <SafeAreaView style={contStyle}>
        <TouchableOpacity
          onPress={() => Keyboard.dismiss()}
          style={titleContStyle}
        >
          <BackToHome />
          <Text style={titleStyle}>Diario</Text>
          <Text>&nbsp;</Text>
        </TouchableOpacity>

        <KeyboardAvoidingView
          style={{ paddingVertical: 20 }}
          behavior="position"
        >
          <TextInput
            onChangeText={text => setDiaryTexts(text)}
            style={textAreaStyle}
            multiline
            value={diaryTexts}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </BackgroundImage>
  );
}

export default DiaryScreen;

const styles = StyleSheet.create({
    contStyle: {
      width: "90%",
      height: "90%",
      backgroundColor: "transparent",
      rowGap: 30,
    },
    titleContStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: 100,
    },
    titleStyle: {
      fontSize: 42,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: "#B6EADA",
      textTransform: "capitalize",
      //fontFamily: "//poppinsMedium",
      textAlign: "center",
      justifyContent: "center",
    },
    textAreaStyle: {
      fontSize: 20,
      color: "#fff",
      //fontFamily: "//poppinsRegular",
      overflow: "visible",
      width: "100%",
      padding: 0,
    },
  }),
  { contStyle, titleContStyle, titleStyle, textAreaStyle } = styles;
