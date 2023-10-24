import React from "react";
import { StyleSheet, View, Text, TouchableOpacity as Btn } from "react-native";

function Option(props) {
  const { title = "", onPressAction = null, onEnabled = false } = props;

  return (
    <View style={optionSytle}>
      <Text style={titleStyle}>{title}</Text>
      <Btn
        onPress={onPressAction}
        style={onEnabled ? bkEnabledOption : bkDisabledOption}
      >
        <View style={onEnabled ? enabledOption : disabledOption} />
      </Btn>
    </View>
  );
}

export default Option;

const styles = StyleSheet.create({
    optionSytle: {
      flexDirection: "row",
      width: "78%",
      height: 90,
      alignItems: "center",
      justifyContent: "space-between",
      overflow: "hidden",
      backgroundColor: "transparent",
    },
    bkEnabledOption: {
      backgroundColor: "#1e1e1e",
      width: 75,
      height: 40,
      //borderRadius: 20,
      justifyContent: "center",
      alignItems: "flex-start",
      paddingLeft: 5,
    },
    enabledOption: {
      width: 30,
      height: 30,
      backgroundColor: "green",
      //borderRadius: 100,
    },
    bkDisabledOption: {
      backgroundColor: "#000",
      width: 75,
      height: 40,
      //borderRadius: 20,
      justifyContent: "center",
      alignItems: "flex-end",
      paddingRight: 5,
    },
    disabledOption: {
      width: 30,
      height: 30,
      backgroundColor: "red",
      //borderRadius: 100,
    },
    titleStyle: {
      color: "#fff",
      fontSize: 17,
    },
  }),
  {
    optionSytle,
    bkEnabledOption,
    enabledOption,
    bkDisabledOption,
    disabledOption,
    titleStyle,
  } = styles;
