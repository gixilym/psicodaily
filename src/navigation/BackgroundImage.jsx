import React from "react";
import { ImageBackground } from "react-native";
import backgroundImg from "../img/background.webp";

const defaultStyles = {
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "#000",
};

function BackgroundImage({ style = defaultStyles, children }) {
  return (
    <ImageBackground
      resizeMode="cover"
      blurRadius={80}
      source={backgroundImg}
      style={style}
    >
      {children}
    </ImageBackground>
  );
}

export default BackgroundImage;
