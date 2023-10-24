import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home/Home";
import Chat from "../navigation/screens/Chat/Chat";
import LogIn from "../navigation/screens/LogIn/LogIn";
import Configuration from "./screens/Home/Configuration/Configuration";
import RecordScreen from "./screens/Home/RecordScreen";
import { AntDesign } from "@expo/vector-icons";
import {
  CONFIG_PAGE,
  DIARY_PAGE,
  HOME_PAGE,
  RECORD_PAGE,
  WELCOME_PAGE,
} from "../utils/const";
import DiaryScreen from "./screens/Home/DiaryScreen";

function HomeStackScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={WELCOME_PAGE}
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={HOME_PAGE}
        component={Home}
      />

      <Stack.Screen name={CONFIG_PAGE} component={Configuration} />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: "vertical",
        }}
        name={RECORD_PAGE}
        component={RecordScreen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: "vertical",
        }}
        name={DIARY_PAGE}
        component={DiaryScreen}
      />

      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  const Tab = createBottomTabNavigator(),
    optionsNavigator = {
      tabBarStyle: {
        backgroundColor: "#000",
        borderTopColor: "#2caba6",
        borderTopWidth: 0.3,
        paddingTop: 15,
      },
    },
    optionsHome = {
      headerShown: false,
      tabBarLabel: "",
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#2caba6",
      tabBarIcon: ({ color }) => (
        <AntDesign name="home" size={24} color={color} />
      ),
    },
    optionsChat = {
      tabBarLabel: "",
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#2caba6",
      tabBarIcon: ({ color }) => (
        <AntDesign name="message1" size={24} color={color} />
      ),
    },
    optionsLogIn = {
      tabBarLabel: "",
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#2caba6",
      tabBarIcon: ({ color }) => (
        <AntDesign name="user" size={24} color={color} />
      ),
    };

  return (
    <Tab.Navigator
      screenOptions={optionsNavigator}
      initialRouteName={HOME_PAGE}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={optionsHome}
      />
      <Tab.Screen name="Chat" component={Chat} options={optionsChat} />
      <Tab.Screen name="LogIn" component={LogIn} options={optionsLogIn} />
    </Tab.Navigator>
  );
}

export default MyTabs;
