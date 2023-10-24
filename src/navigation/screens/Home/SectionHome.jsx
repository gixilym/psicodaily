import React from "react";
import { TouchableOpacity } from "react-native";

const defaultContStyle = {
  width: "90%",
  minHeight: 100,
  maxHeight: 140,
  alignItems: "start",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  paddingTop: 25,
  paddingBottom: 30,
  overflow: "hidden",
  borderRadius: 18,
  backgroundColor: "rgba(17, 25, 40, 0.54)",
  border: "1 solid rgba(255, 255, 255, 0.125)",
};

function SectionHome({ pressAction = null, contStyle = {}, children }) {
  return (
    <TouchableOpacity
      onPress={pressAction}
      style={[defaultContStyle, contStyle]}
    >
      {children}
    </TouchableOpacity>
  );
}

export default SectionHome;
