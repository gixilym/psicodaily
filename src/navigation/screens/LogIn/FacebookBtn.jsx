import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function FacebookBtn() {
  return (
    <TouchableOpacity onPress={() => promptAsync()} style={containerFacebook}>
      <View style={facebookSvg}>
        <Svg width="30px" height="30px" viewBox="-5 0 20 20" version="1.1">
          <G
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <G transform="translate(-385.000000, -7399.000000)" fill="#719cfa">
              <G transform="translate(56.000000, 160.000000)">
                <Path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"></Path>
              </G>
            </G>
          </G>
        </Svg>
      </View>
      <Text style={facebookText}>Inicia con Facebook</Text>
    </TouchableOpacity>
  );
}

export default FacebookBtn;

const styles = StyleSheet.create({
    containerFacebook: {
      backgroundColor: "rgba(55, 55, 55, 0.5)",
      borderWidth: 1,
      borderColor: "rgb(55, 55, 55)",
      width: "100%",
      height: 50,
      //borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      columnGap: 20,
      paddingHorizontal: 15,
    },
    facebookSvg: {
      height: 30,
      //borderRadius: 8,
      width: 45,
      alignItems: "center",
    },
    facebookText: {
      color: "#9d9d9d",
      fontSize: 20,
      //fontFamily: "//poppinsLight",
      height: "100%",
      lineHeight: 55,
    },
  }),
  { facebookText, facebookSvg, containerFacebook } = styles;
