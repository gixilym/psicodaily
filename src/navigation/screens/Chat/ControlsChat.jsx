import React from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

function ControlsChat(props) {
  const { inputText, setInputText, handleSendMessage } = props;

  // const handleTextInputChange = () => {
  //   // Actualizar el estado del input para forzar el renderizado del componente `TextInput`.
  //   setInputText(inputText);
  // };

  return (
    <KeyboardAvoidingView style={inputContainer} behavior="padding" enabled>
      <TextInput
        style={input}
        onChangeText={text => setInputText(text)}
        value={inputText}
        placeholder="Escribe tu mensaje..."
        placeholderTextColor="#2caba6"
      />

      <TouchableOpacity style={sendBtn} onPress={handleSendMessage}>
        <AntDesign name="arrowright" size={30} color="#2caba6" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default ControlsChat;

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderTopWidth: 0,
      width: "100%",
      height: "auto",
    },
    input: {
      flex: 1,
      padding: 8,
      //fontFamily: "//poppinsLight",
      letterSpacing: 0.8,
      color: "#fff",
      paddingLeft: 20,
    },
    sendBtn: {
      height: 50,
      width: 60,
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
      justifyContent: "center",
      alignItems: "center",
    },
  }),
  { sendBtn, input, inputContainer } = styles;
