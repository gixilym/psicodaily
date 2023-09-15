import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Animated, View } from "react-native";

function Messages(props) {
  const { message } = props,
    [slideUserAnim] = useState(new Animated.Value(0)),
    [slideBotAnim] = useState(new Animated.Value(0)),
    [shouldAnimate, setShouldAnimate] = useState(false);

  const slideUser = slideUserAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 80],
    }),
    slideBot = slideBotAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [-30, -10],
    });

  useEffect(() => {
    if (!shouldAnimate && message.sender === "bot") {
      Animated.timing(slideBotAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else if (message.sender === "user") {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [message]);

  useEffect(() => {
    if (shouldAnimate) {
      Animated.timing(slideUserAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [shouldAnimate]);

  return (
    <Animated.View
      key={message.id}
      style={[
        messageContainer,
        {
          transform: [
            { translateX: message.sender === "user" ? slideUser : slideBot },
          ],
        },
      ]}
    >
      <View
        style={[
          messageBubble,
          message.sender === "user" ? userMessage : botMessage,
        ]}
      >
        <Text style={messageText}>{message.text}</Text>
      </View>
    </Animated.View>
  );
}

export default Messages;

const styles = StyleSheet.create({
    messageContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    messageBubble: {
      borderRadius: 10,
      padding: 10,
      width: "80%",
    },
    userMessage: {
      alignSelf: "flex-end",
      backgroundColor: "rgba(107, 99, 99, 0.6)",
    },
    botMessage: {
      alignSelf: "flex-start",
      backgroundColor: "#2caba6",
    },
    messageText: {
      color: "#fff",
      fontSize: 20,
      fontFamily: "poppinsLight",
      letterSpacing: 1,
    },
  }),
  { messageBubble, messageContainer, messageText, botMessage, userMessage } =
    styles;
