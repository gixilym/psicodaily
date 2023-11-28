import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { HOME_PAGE } from "../../../../utils/const";
import { useNavigation } from "@react-navigation/native";
import { useZustand } from "../../../../store/zustand";
import { Entypo } from "@expo/vector-icons";

function MoodRecords() {
  const { moodSelected, moodDescription, moodDate } = useZustand(),
    goTo = useNavigation();

  return (
    <SafeAreaView style={sfStyle}>
      <Text style={{ color: "#fff" }}>Registro de tu estado anímico</Text>

      <View style={{ backgroundColor: "#fff", padding: 40 }}>
        <Text style={{ color: "gold" }}>{moodDate}</Text>
        <Entypo name={moodSelected} size={40} color="#0e625f" />
        <Text style={{ color: "blue" }}>{moodDescription}</Text>
      </View>

      <TouchableOpacity onPress={() => goTo.navigate(HOME_PAGE)}>
        <Text style={{ color: "#af1d1d" }}>Volver</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default MoodRecords;

const styles = StyleSheet.create({
    sfStyle: {
      width: "100%",
      height: "100%",
      backgroundColor: "#000",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  }),
  { sfStyle } = styles;
