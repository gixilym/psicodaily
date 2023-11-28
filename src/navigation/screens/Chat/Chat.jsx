import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import BackgroundImage from "../../BackgroundImage";
import Messages from "../../../navigation/screens/Chat/Messages";
import IsLoad from "../../../navigation/screens/Chat/IsLoad";
import ControlsChat from "../../../navigation/screens/Chat/ControlsChat";
import { useZustand } from "../../../store/zustand";
import { confirmAlert } from "../../../utils/utilities";
import { MaterialIcons } from "@expo/vector-icons";

let idMessage = 0,
  initialMsg = {
    sender: "bot",
    id: idMessage + "rgeG",
    text: "Gixi, ¿qué tal te encuentras?",
    date: null,
  };

//!PROBLEMAS CON NODEMODULES

function Chat() {
  const [inputText, setInputText] = useState(""),
    [isLoading, setIsLoading] = useState(false),
    { setRecordChat, chatMessages, setChatMessages, clearChatMessages } =
      useZustand();

  useEffect(() => {
    setChatMessages([
      {
        id: initialMsg.id,
        text: initialMsg.text,
        sender: initialMsg.sender,
      },
    ]);
  }, []);

  function getDateMessage() {
    const DATE_MSG = new Date();
    let day = DATE_MSG.getDate(),
      month = DATE_MSG.getMonth() + 1,
      year = DATE_MSG.getFullYear();

    if (day < 10) {
      day = "0" + day.toString();
    } else if (month < 10) {
      month = "0" + month.toString();
    }
    year = year.toString().slice(-2);

    const formatDate = day + "/" + month + "/" + year;
    return formatDate;
  }

  function handleSendMessage() {
    if (inputText) {
      const newID = idMessage++ + inputText,
        newUserMessage = {
          sender: "user",
          id: newID,
          text: inputText,
          date: getDateMessage(),
        },
        requestOptions = {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: newUserMessage }),
        };
      setChatMessages([...chatMessages, newUserMessage]);
      setRecordChat(newUserMessage);
      setInputText("");

      setTimeout(() => setIsLoading(true), 500);
      setTimeout(() => {
        fetch("http://10.0.0.125:3001/response", requestOptions)
          .then(res => res.json())
          .then(botMsg => updateMessages(botMsg))
          .then(() => getDateMessage())
          .catch(error => updateMessages(`Error: ${error.message}`));
      }, 900);
    }
  }

  function updateMessages(botMsg) {
    setIsLoading(false);

    useZustand.setState(prevState => {
      const newID = idMessage++ + inputText,
        newBotMessage = {
          sender: "bot",
          id: newID,
          text: botMsg,
          date: getDateMessage(),
        };

      setRecordChat(newBotMessage);
      return { chatMessages: [...prevState.chatMessages, newBotMessage] };
    });
  }

  function handleClearMessages() {
    return confirmAlert(
      "¿Deseas eliminar los mensajes de este chat?",
      null,
      clearChatMessages
    );
  }

  //! Tal vez la pantalla no sube por scroll view (probar quitándolo)
  return (
    <BackgroundImage style={bkStyle}>
      <SafeAreaView style={sfStyle}>
        <View style={cleanChatStyle}>
          <TouchableOpacity>
            <MaterialIcons
              onPress={handleClearMessages}
              name="cleaning-services"
              size={26}
              color="#939695"
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={scrollViewStyle}>
          <View style={msgContStyle}>
            {chatMessages.length >= 0 &&
              chatMessages.map(message => (
                <Messages key={message.id} message={message} />
              ))}
            {isLoading && <IsLoad />}
          </View>
        </ScrollView>

        <ControlsChat
          inputText={inputText}
          setInputText={setInputText}
          handleSendMessage={handleSendMessage}
        />
      </SafeAreaView>
    </BackgroundImage>
  );
}

export default Chat;

const styles = StyleSheet.create({
    bkStyle: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor: "#000",
    },
    sfStyle: {
      width: "100%",
      height: "100%",
      paddingTop: "13%",
    },
    scrollViewStyle: {
      // paddingHorizontal: 1,
      width: "100%",
      height: "100%",
    },
    msgContStyle: {
      paddingHorizontal: 10,
      rowGap: 13,
      width: "100%",
      height: "100%",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    cleanChatStyle: {
      width: "95%",
      height: 40,
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "flex-end",
    },
  }),
  { bkStyle, sfStyle, msgContStyle, cleanChatStyle, scrollViewStyle } = styles;
