import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

function Pomodoro() {
  const [time, setTime] = useState(25 * 60),
    [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK"),
    [isActive, setIsActive] = useState(false),
    [sounds, setSounds] = useState(true),
    options = ["Pomodoro", "Short Break", "Long Break"],
    colors = ["gold", "red", "green"];

  useEffect(() => {
    let intervalTimer = null;

    if (isActive) {
      intervalTimer = setInterval(() => setTime(time - 1), 1000);
    } else {
      clearInterval(intervalTimer);
    }

    if (time === 0) {
      setIsActive(false);

      setTime(
        currentTime === 1 ? 5 * 60 : currentTime === 2 ? 30 * 60 : 25 * 60
      );
    }

    return () => clearInterval(intervalTimer);
  }, [isActive, time]);

  function onSelectOption(index) {
    setCurrentTime(index);
    return index === 1
      ? setTime(5 * 60)
      : index === 2
      ? setTime(30 * 60)
      : setTime(25 * 60);
  }

  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  function handleStartStop() {
    if (sounds) {
      playSound();
      setIsActive(!isActive);
    } else setIsActive(!isActive);
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/culiado.mp3")
    );

    await sound.playAsync();
  }

  return (
    <View style={[container, { backgroundColor: colors[currentTime] }]}>
      <Text style={title}>Gixidoro Pomodoro</Text>

      <View style={optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            onPress={() => onSelectOption(index)}
            key={index}
            style={[
              optionBtn,
              currentTime !== index && { borderColor: "transparent" },
            ]}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity onPress={() => setSounds(!sounds)}>
        <Text>{sounds ? "Disable sounds" : "Active sounds"}</Text>
      </TouchableOpacity>

      <Text>{formattedTime}</Text>
      <TouchableOpacity onPress={handleStartStop} style={startBtn}>
        <Text style={{ color: "white" }}>{isActive ? "STOP" : "START"}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Pomodoro;

const style = StyleSheet.create({
    container: {
      flexDirection: "column",
    },
    title: {
      fontSize: 24,
      color: "red",
    },
    optionsContainer: {
      flexDirection: "row",
      width: "100%",
    },
    optionBtn: {
      width: "33%",
      border: "1px solid black",
    },
    startBtn: {
      backgroundColor: "blue",
    },
  }),
  { container, title, optionsContainer, optionBtn, startBtn } = style;
