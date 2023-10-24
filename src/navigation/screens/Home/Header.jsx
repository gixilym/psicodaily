import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { CONFIG_PAGE } from "../../../utils/const";

function Header() {
  const goTo = useNavigation();

  return (
    <View style={header}>
      <TouchableOpacity
        onPress={() => goTo.navigate(CONFIG_PAGE)}
        style={setting}
      >
        <AntDesign name="setting" size={24} color="#939695" />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
    header: {
      width: "90%",
      flexDirection: "row",
      alignItems: "end",
      justifyContent: "flex-end",
      columnGap: 10,
      height: 36,
    },
    setting: {
      // backgroundColor: "rgba(80, 80, 80, 0.5)",
      //borderRadius: 8,
      padding: 5,
      height: 40,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  }),
  { header, setting } = styles;
