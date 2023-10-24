import React from "react";
import { Text, StyleSheet, View } from "react-native";

function Messages(props) {
  const { message } = props;

  return (
    <View
      key={message.id}
      style={message.sender === "user" ? userMsgStyle : botMsgStyle}
    >
      <View style={message.sender === "user" ? userMessage : botMessage}>
        <Text style={messageText}>{message.text}</Text>
      </View>
    </View>
  );
}

export default Messages;

const styles = StyleSheet.create({
    userMsgStyle: {
      width: "100%",
      alignItems: "flex-end",
    },
    botMsgStyle: {
      alignItems: "flex-start",
      width: "100%",
    },
    userMessage: {
      //borderRadius: 10,
      padding: 10,
      width: "85%",
      backgroundColor: "rgba(17, 25, 40, 0.54)",
    },
    botMessage: {
      //borderRadius: 10,
      padding: 10,
      width: "85%",
      backgroundColor: "rgba(44, 171, 166, 0.38)",
    },
    messageText: {
      color: "#fff",
      fontSize: 20,
      //fontFamily: "//poppinsLight",
      letterSpacing: 1,
    },
  }),
  { userMsgStyle, botMsgStyle, messageText, botMessage, userMessage } = styles;
