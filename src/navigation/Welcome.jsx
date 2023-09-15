import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useMyContext } from "../Context";

function Welcome() {
  const { setThisPage } = useMyContext();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a PsicoDaily</Text>
      <Text style={styles.text}>
        Cuando te sientas sol@ puedes venir aquí a desahogarte
      </Text>
      <TouchableOpacity
        onPress={() => setThisPage("YourData")}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Empezemos</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
