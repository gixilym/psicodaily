import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/navigation/MyTabs";
import * as Font from "expo-font";

function App() {
  useEffect(() => {
    Font.loadAsync({
      poppinsLight: require("./assets/fonts/Poppins-Regular.ttf"),
      poppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
      poppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
      poppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      poppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    });

    return () => console.log("me limpio");
  }, []);

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
