import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function RecordChat(props) {
  const { test } = props;

  return (
    <View style={container}>
      <View style={recordContainer}>
        <Text style={title}>Historial</Text>
        <AntDesign name="arrowsalt" size={20} color="#fff" />
      </View>

      <View style={recordContainerList}>
        {test.map(t => (
          <View style={recordList} key={t}>
            <AntDesign name="caretright" size={15} color="#B6EADA" />
            <Text style={record}>{t}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default RecordChat;

const styles = StyleSheet.create({
    container: {
      width: "90%",
      height: 160,
      borderRadius: 10,
      alignItems: "start",
      justifyContent: "center",
      backgroundColor: "rgba(80, 80, 80, 0.5)",
      backdropFilter: "blur(5px)",
      border: "0px solid rgba(255, 255, 255, 0.2)",
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
    recordContainer: {
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      width: "95%",
    },
    recordContainerList: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    recordList: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      width: "100%",
      columnGap: 8,
    },
    record: {
      color: "#fff",
      fontFamily: "poppinsLight",
    },
  }),
  {
    container,
    title,
    record,
    recordContainer,
    recordList,
    recordContainerList,
  } = styles;
