import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useMyContext } from "../Context";

function YourData() {
  const { setThisPage } = useMyContext();

  return (
    <View>
      <Text>Coloca como quieres que te llame</Text>
      <TextInput />
      <TouchableOpacity onPress={() => setThisPage("Navigation")}>
        <Text>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
}

export default YourData;
