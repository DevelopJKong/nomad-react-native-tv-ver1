import Tabs from "./navigation/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import React from "react";
import { useColorScheme } from "react-native";
import Root from "./navigation/Root";
import { darkTheme, lightTheme } from "./style";

export default function App() {
  //TODO 다크 테마 사용할수있도록 확인 필요
  const isDark = useColorScheme() === "dark";
  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
