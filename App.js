import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/navigation/MyTabs";
import { StatusBar } from "expo-status-bar";
import { useZustand } from "./src/store/zustand";
// import Welcome from "./src/navigation/Welcome";
// import YourData from "./src/navigation/YourData";
// import { WELCOME_PAGE, YOUR_DATA_PAGE } from "./src/utils/const";
// import * as Font from "expo-font";

function App() {
  const { shownStatusBar, thisPage } = useZustand();

  // (function loadFonts() {
  //   Font.loadAsync({
  //     //poppinsLight: require("./assets/fonts///poppins-Regular.ttf"),
  //     //poppinsMedium: require("./assets/fonts///poppins-Medium.ttf"),
  //     //poppinsRegular: require("./assets/fonts///poppins-Regular.ttf"),
  //     //poppinsSemiBold: require("./assets/fonts///poppins-SemiBold.ttf"),
  //     //poppinsBold: require("./assets/fonts///poppins-Bold.ttf"),
  //   });
  // })();

  // ? Descomentar para despliegue.
  // if (thisPage === WELCOME_PAGE) {
  //   return <Welcome />;
  // }

  // if (thisPage === YOUR_DATA_PAGE) {
  //   return <YourData />;
  // }

  return (
    <NavigationContainer>
      <MyTabs />
      <StatusBar style="light" hidden={shownStatusBar} />
    </NavigationContainer>
  );
}

export default App;
