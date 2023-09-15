import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useZustand } from "../../../store/zustand";

function Configuration() {
  const { setShownStatusBar } = useZustand();

  return (
    <View>
      <Text>ConfigurationDFGDFGSDFGSDF</Text>
      <Button onPress={setShownStatusBar} title="Desactivar barra de estado" />
    </View>
  );
}

export default Configuration;

const styles = StyleSheet.create({});
