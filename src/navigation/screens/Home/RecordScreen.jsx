import React, { useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Button,
} from "react-native";
import BackgroundImage from "../../BackgroundImage";
import { useZustand } from "../../../store/zustand";
import { BackToHome } from "../../../utils/utilities";

function RecordScreen() {
  const {
    recordChat,
    recordChatIsReversed,
    setRecordChatIsReversed,
    reverseRecordChat,
  } = useZustand();

  return (
    <BackgroundImage>
      <SafeAreaView style={safeAreaStyle}>
        <View style={titleContainer}>
          <BackToHome />
          <Text style={title}>Historial</Text>
          <Button
            title={recordChatIsReversed ? "Recientes" : "Antiguos"}
            onPress={() => {
              reverseRecordChat();
              setRecordChatIsReversed();
            }}
          />
        </View>

        <ScrollView style={msgContainer}>
          {recordChat.length > 0 ? (
            recordChat.map(msg => (
              <View style={textContainer} key={msg.id}>
                <Text style={msg.sender === "user" ? userText : botText}>
                  {msg.text}
                </Text>

                <Text style={dateMsg}>{msg.sender === "user" && msg.date}</Text>
              </View>
            ))
          ) : (
            <Text style={emptyRecord}>Historial vacío</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </BackgroundImage>
  );
}

export default RecordScreen;

const styles = StyleSheet.create({
    safeAreaStyle: {
      width: "90%",
      height: "100%",
      backgroundColor: "transparent",
      rowGap: 35,
      overflowY: "visible",
    },
    titleContainer: {
      width: "100%",
      height: 100,
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "row",
    },
    msgContainer: {
      width: "100%",
    },
    userText: {
      color: "#fff",
      //fontFamily: "//poppinsRegular",
      fontSize: 24,
    },
    botText: {
      color: "#45cba3",
      //fontFamily: "//poppinsRegular",
      fontSize: 18,
      marginBottom: 30,
    },
    emptyRecord: {
      color: "#ffffff",
    },
    flatList: {
      width: "90%",
    },
    title: {
      fontSize: 42,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: "#B6EADA",
      textTransform: "capitalize",
      //fontFamily: "//poppinsMedium",
      textAlign: "center",
    },
    btn: {
      backgroundColor: "red",
      padding: "3em",
      height: 100,
      width: 100,
    },
    textContainer: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
    },
    dateMsg: {
      fontSize: 13,
      //fontFamily: "//poppinsMedium",
      color: "#5a5a5a",
    },
  }),
  {
    container,
    title,
    emptyRecord,
    msgContainer,
    userText,
    botText,
    titleContainer,
    dateMsg,
    textContainer,
    safeAreaStyle,
  } = styles;
