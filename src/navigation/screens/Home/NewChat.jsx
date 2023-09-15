import React from "react";
import { Text, View, StyleSheet } from "react-native";

function NewChat() {
  return (
    <View style={textContainer}>
      <Text style={title}>Nuevo Chat</Text>
      <Text style={text}>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero
        at ante tristique elementum nec eget nulla. Vestibulum nec euismod mi.
        Maecenas euismod tellus sit amet justo fermentum, at bibendum quam
      </Text>
    </View>
  );
}

export default NewChat;

const styles = StyleSheet.create({
    textContainer: {
      width: "90%",
      height: 160,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(80, 80, 80, 0.5)",
      backdropFilter: "blur(5px)",
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
    },
  }),
  { textContainer, text, title } = styles;
