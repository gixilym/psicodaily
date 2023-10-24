import React from "react";
import { View, StyleSheet, Alert, TouchableOpacity, Text } from "react-native";
import Option from "./Option";
import { auth } from "../../../../../server/firebase";
import { signOut } from "firebase/auth";
import { useZustand } from "../../../../store/zustand";
import { confirmAlert } from "../../../../utils/utilities";
import { YOUR_DATA_PAGE } from "../../../../utils/const";

function Configuration() {
  const {
    shownStatusBar,
    setShownStatusBar,
    setThisPage,
    clearRecordChat,
    clearDiaryTexts,
  } = useZustand();

  async function logOut() {
    await signOut(auth);
    return Alert.alert("Cerraste Sesión");
  }

  function handleDeleteRecord() {
    return confirmAlert(
      "¿Deseas eliminar todo el historial de chats?",
      null,
      clearRecordChat
    );
  }

  function handleDeleteDiary() {
    return confirmAlert(
      "¿Deseas eliminar los escritos de tu Diario?",
      null,
      clearDiaryTexts
    );
  }

  return (
    <View style={container}>
      <Option
        title="Ocultar barra de estado"
        onEnabled={shownStatusBar}
        onPressAction={setShownStatusBar}
      />

      <Option title="Recibir notificaciones" />

      <Option title="Sos Gustavo Ceratti" />

      <TouchableOpacity
        style={changeNameBtn}
        onPress={() => setThisPage(YOUR_DATA_PAGE)}
      >
        <Text style={{ color: "#fff" }}>Cambiar nombre</Text>
      </TouchableOpacity>

      {/* 
      <TouchableOpacity style={logoutBtn} onPress={logOut}>
        <Text style={{ color: "#ffffff" }}>Cerrar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={changeNameBtn}
        onPress={() => setThisPage(YOUR_DATA_PAGE)}
      >
        <Text style={{ color: "#fff" }}>Cambiar nombre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={changeNameBtn} onPress={handleDeleteRecord}>
        <Text style={{ color: "#fff" }}>Borrar Historial</Text>
      </TouchableOpacity>

      <TouchableOpacity style={changeDeleteDiary} onPress={handleDeleteDiary}>
        <Text style={{ color: "#fff" }}>Borrar Diario</Text>
      </TouchableOpacity> */}
    </View>
  );
}

export default Configuration;

const styles = StyleSheet.create({
    container: {
      justifyContent: "start",
      alignItems: "center",
      backgroundColor: "rgb(53, 55, 57)",
      width: "100%",
      height: "100%",
    },
    logoutBtn: {
      backgroundColor: "blue",
      padding: 20,
      marginTop: 50,
    },
    changeNameBtn: {
      backgroundColor: "#965454",
      padding: 20,
      marginTop: 50,
    },
    statusBtn: {
      backgroundColor: "green",
      padding: 30,
    },
    changeDeleteDiary: {
      backgroundColor: "gold",
      padding: 20,
    },
  }),
  { container, logoutBtn, changeNameBtn, statusBtn, changeDeleteDiary } =
    styles;
