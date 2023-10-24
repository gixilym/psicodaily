import React from "react";
import { Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { HOME_PAGE } from "./const";

function confirmAlert(text, cancelAction, confirmAction) {
  Alert.alert("Confirmación", text, [
    {
      text: "Cancelar",
      onPress: () => cancelAction,
    },
    {
      text: "Confirmar",
      onPress: () => confirmAction(),
    },
  ]);
}

function BackToHome() {
  const goTo = useNavigation();
  return (
    <TouchableOpacity onPress={() => goTo.navigate(HOME_PAGE)}>
      <AntDesign name="close" size={26} color="#45cba3" />
    </TouchableOpacity>
  );
}

export { confirmAlert, BackToHome };
