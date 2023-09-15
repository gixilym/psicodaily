import React from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

function ControlsChat(props) {
  const { inputText, setInputText, handleSendMessage } = props;

  return (
    <KeyboardAvoidingView
      style={inputContainer}
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled
      keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
    >
      <TextInput
        style={input}
        onChangeText={text => setInputText(text)}
        value={inputText}
        placeholder="Escribe tu mensaje..."
        placeholderTextColor="#2caba6"
        onSubmitEditing={Keyboard.dismiss}
      />

      <TouchableOpacity style={sendBtn} onPress={handleSendMessage}>
        <AntDesign name="arrowright" size={28} color="#000" />
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
      marginBottom: 20,
    },
    input: {
      flex: 1,
      backgroundColor: "rgb(0, 0, 0)",
      padding: 8,
      fontFamily: "poppinsLight",
      letterSpacing: 0.8,
      color: "white",
      paddingLeft: 20,
    },
    sendBtn: {
      height: 50,
      width: 60,
      backgroundColor: "#2caba6",
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
    },
  }),
  { sendBtn, input, inputContainer } = styles;
