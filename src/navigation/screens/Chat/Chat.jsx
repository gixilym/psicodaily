import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Button } from "react-native";
import Messages from "../../../navigation/screens/Chat/Messages";
import IsLoad from "../../../navigation/screens/Chat/IsLoad";
import ControlsChat from "../../../navigation/screens/Chat/ControlsChat";
import { useZustand } from "../../../store/zustand";

let idMessage = 0,
  initialMsg = {
    text: "Gixi, ¿qué tal te encuentras?",
    id: idMessage + "rgeG",
    sender: "bot",
  };

function Chat() {
  const [inputText, setInputText] = useState(""),
    [isLoading, setIsLoading] = useState(false),
    { chatMessages, setChatMessages, clearChatMessages } = useZustand();

  useEffect(() => {
    setChatMessages([
      {
        id: initialMsg.id,
        text: initialMsg.text,
        sender: initialMsg.sender,
      },
    ]);
  }, []);

  function handleSendMessage() {
    if (inputText) {
      const newID = idMessage++ + inputText,
        newUserMessage = {
          id: newID,
          text: inputText,
          sender: "user",
        },
        requestOptions = {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: newUserMessage }),
        };
      setChatMessages([...chatMessages, newUserMessage]);
      setInputText("");

      setTimeout(() => setIsLoading(true), 500);
      setTimeout(() => {
        fetch("http://10.0.0.125:3001/response", requestOptions)
          .then(res => res.json())
          .then(botMsg => updateMessages(botMsg))
          .catch(error => {
            updateMessages(`Hubo un error: ${error.message}`);
            console.log(error);
          });
      }, 900);
    }
  }
  function updateMessages(botMsg) {
    setIsLoading(false);

    useZustand.setState(prevState => {
      const newID = idMessage++ + inputText;
      const newBotMessage = {
        id: newID,
        text: botMsg,
        sender: "bot",
      };

      return { chatMessages: [...prevState.chatMessages, newBotMessage] };
    });
  }

  //! Tal vez la pantalla no sube por scroll view (probar quitándolo)
  return (
    <SafeAreaView style={container}>
      <Button onPress={clearChatMessages} title="clear chat" />
      <ScrollView contentContainerStyle={messagesContainer}>
        {chatMessages.length >= 0 &&
          chatMessages.map(message => (
            <Messages key={message.id} message={message} />
          ))}
        {isLoading && <IsLoad />}
      </ScrollView>

      <ControlsChat
        inputText={inputText}
        setInputText={setInputText}
        handleSendMessage={handleSendMessage}
      />
    </SafeAreaView>
  );
}

export default Chat;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000",
    },
    messagesContainer: {
      padding: 16,
      rowGap: 13,
    },
  }),
  { container, messagesContainer } = styles;
