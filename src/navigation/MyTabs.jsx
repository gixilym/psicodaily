import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home/Home";
import Chat from "../navigation/screens/Chat/Chat";
import LogIn from "../navigation/screens/LogIn/LogIn";
import Configuration from "./screens/Home/Configuration";
import { AntDesign } from "@expo/vector-icons";

function HomeStackScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Configuration" component={Configuration} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  const Tab = createBottomTabNavigator(),
    optionsNavigator = {
      tabBarStyle: { backgroundColor: "#000000", borderTopWidth: 0 },
    },
    optionsHome = {
      tabBarLabel: "",
      tabBarBadge: 2,
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#2caba6",
      tabBarIcon: ({ color }) => (
        <AntDesign name="home" size={24} color={color} />
      ),
    },
    optionsChat = {
      tabBarLabel: "",
      tabBarBadge: 1,
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#2caba6",
      tabBarIcon: ({ color }) => (
        <AntDesign name="message1" size={24} color={color} />
      ),
    },
    optionsLogIn = {
      tabBarLabel: "",
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#2caba6",
      tabBarIcon: ({ color }) => (
        <AntDesign name="user" size={24} color={color} />
      ),
    };

  return (
    <Tab.Navigator screenOptions={optionsNavigator} initialRouteName="Home">
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
