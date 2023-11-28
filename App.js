import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MyTabs from "./src/navigation/MyTabs.jsx";
import { useZustand } from "./src/store/zustand.js";
// import Welcome from "./src/navigation/Welcome";
// import YourData from "./src/navigation/YourData";
// import { WELCOME_PAGE, YOUR_DATA_PAGE } from "./src/utils/const";

function App() {
  const { shownStatusBar, thisPage } = useZustand();

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
