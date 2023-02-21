import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import SingleStationScreen from "./src/Screens/SingleStationScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <SingleStationScreen />
    </NativeBaseProvider>
  );
}
