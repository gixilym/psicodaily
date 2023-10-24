import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useZustand } from "../../../store/zustand";
import { AntDesign } from "@expo/vector-icons";
import SectionHome from "./SectionHome";
import { RECORD_PAGE } from "../../../utils/const";

function RecordChat() {
  const { recordChat } = useZustand(),
    goTo = useNavigation(),
    userMessages = recordChat?.filter(user => user.sender === "user");

  return (
    <SectionHome
      contStyle={contStyle}
      pressAction={() => goTo.navigate(RECORD_PAGE)}
    >
      <View>
        <View style={recordContStyle}>
          <Text style={titleStyle}>Historial</Text>

          <AntDesign name="arrowsalt" size={20} color="#fff" />
        </View>

        <View style={recordContListStyle}>
          {userMessages.length > 0 ? (
            userMessages.map(message => (
              <View style={recordItemStyle} key={message.id}>
                <AntDesign name="caretright" size={15} color="#B6EADA" />
                <Text style={recordTextStyle}>{message.text}</Text>
              </View>
            ))
          ) : (
            <View style={recordItemStyle}>
              <AntDesign name="caretright" size={15} color="#B6EADA" />
              <Text style={recordTextStyle}>Historial vacío</Text>
            </View>
          )}
        </View>
      </View>
    </SectionHome>
  );
}

export default RecordChat;

const styles = StyleSheet.create({
    contStyle: {
      alignItems: "start",
      paddingTop: 10,
    },
    titleStyle: {
      fontSize: 24,
      letterSpacing: 1,
      textTransform: "uppercase",
      width: "100%",
      color: "#B6EADA",
      textTransform: "capitalize",
      //fontFamily: "//poppinsMedium",
    },
    recordContStyle: {
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      width: "95%",
    },
    recordContListStyle: {
      alignItems: "start",
      rowGap: 8,
      justifyContent: "center",
      width: "100%",
    },
    recordItemStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      width: "100%",
      columnGap: 8,
    },
    recordTextStyle: {
      color: "#fff",
      //fontFamily: "//poppinsLight",
    },
  }),
  {
    contStyle,
    titleStyle,
    recordTextStyle,
    recordContStyle,
    recordItemStyle,
    recordContListStyle,
  } = styles;
