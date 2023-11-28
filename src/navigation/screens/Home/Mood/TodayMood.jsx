import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useZustand } from "../../../../store/zustand";
import { useNavigation } from "@react-navigation/native";
import {
  MOOD_RECORDS,
  MOOD_HAPPY,
  MOOD_NEUTRAL,
  MOOD_SAD,
  MOOD_CRY,
} from "../../../../utils/const";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

function TodayMood() {
  const {
      nickNameUser,
      setMoodDescription,
      moodSelected,
      setMoodSelected,
      setMoodDate,
    } = useZustand(),
    goTo = useNavigation();

  function onSaveMood() {
    const date = new Date(),
      format = { format: "dd/MM/yyyy" },
      formattedDate = date.toLocaleDateString("es-ES", format);
    setMoodDate(formattedDate);
    goTo.navigate(MOOD_RECORDS);
  }

  return (
    <SafeAreaView style={sfStyle}>
      <View style={conTitle}>
        <Text style={titleStyle}>
          ¿<Text style={{ color: "#2caba6" }}>{nickNameUser}</Text>, cómo te
          sientes hoy?
        </Text>
      </View>

      <View style={emojis}>
        <TouchableOpacity
          onPress={() => setMoodSelected(MOOD_HAPPY)}
          style={[
            emojiContainer,
            moodSelected === MOOD_HAPPY && {
              backgroundColor: "#adadad",
              padding: 10,
            },
          ]}
        >
          <Entypo name="emoji-happy" size={40} color="#0e625f" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMoodSelected(MOOD_NEUTRAL)}
          style={[
            emojiContainer,
            moodSelected === MOOD_NEUTRAL && {
              backgroundColor: "#adadad",
              padding: 10,
            },
          ]}
        >
          <Entypo name="emoji-neutral" size={40} color="#789cce" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMoodSelected(MOOD_SAD)}
          style={[
            emojiContainer,
            moodSelected === MOOD_SAD && {
              backgroundColor: "#adadad",
              padding: 10,
            },
          ]}
        >
          <Entypo name="emoji-sad" size={40} color="#61966c" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMoodSelected(MOOD_CRY)}
          style={[
            emojiContainer,
            moodSelected === MOOD_CRY && {
              backgroundColor: "#adadad",
              padding: 10,
            },
          ]}
        >
          <FontAwesome5 name="sad-cry" size={40} color="#5c49c8" />
        </TouchableOpacity>
      </View>

      <View style={contInput}>
        <TextInput
          style={inputStyle}
          placeholder="describe tu estado..."
          placeholderTextColor="#9a9a9a"
          onChangeText={text => setMoodDescription(text)}
        />
      </View>

      <TouchableOpacity onPress={onSaveMood} style={btnContainer}>
        <Text style={btnText}>Registrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default TodayMood;

const styles = StyleSheet.create({
    sfStyle: {
      width: "100%",
      height: "100%",
      backgroundColor: "#000",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    conTitle: {
      width: "95%",
    },
    titleStyle: {
      fontSize: 32,
      color: "#fff",
      textAlign: "center",
    },
    emojis: {
      marginTop: 30,

      flexDirection: "row",
      width: "70%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    emojiContainer: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000",
      padding: "2em",
      borderRadius: 100,
    },
    contInput: {
      marginTop: 80,
      width: "90%",
      height: 100,
    },
    inputStyle: {
      backgroundColor: "#000000",
      width: "80%",
      alignSelf: "center",
      color: "#fff",
      fontSize: 18,
      textAlign: "center",
      borderBottomWidth: 1,
      borderColor: "#9a9a9a",
      paddingVertical: 8,
    },
    btnContainer: {
      marginTop: 50,
      backgroundColor: "#2caba6",
      borderRadius: 8,
      height: 40,
      width: "38%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    btnText: {
      color: "#fff",
      fontSize: 22,
      letterSpacing: 0.5,
    },
  }),
  {
    sfStyle,
    titleStyle,
    emojis,
    emojiContainer,
    inputStyle,
    contInput,
    btnContainer,
    btnText,
    conTitle,
  } = styles;
