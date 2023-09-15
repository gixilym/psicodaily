import React from "react";
import { View, Text, StyleSheet } from "react-native";

function IsLoad() {
  return (
    <View style={[styles.messageBubble, styles.botMessage]}>
      <Text style={styles.messageText}>Escribiendo...</Text>
    </View>
  );
}

export default IsLoad;

const styles = StyleSheet.create({
  messageBubble: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 4,
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#2caba6",
  },
  messageText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "poppinsLight",
    letterSpacing: 1,
  },
});
