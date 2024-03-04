import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { TamaguiProvider } from "tamagui";

import config from "../tamagui.config";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Slot />
    </TamaguiProvider>
  );
}
