import { Container, Main, Subtitle } from "styles/layouts";
import React from "react";
import { Sheet } from "~/components/Sheet";
import { View } from "tamagui";

export default function Page() {
  return (
    <View f={1} mt="$8">
      <Subtitle>Sign In</Subtitle>
      <Sheet></Sheet>
    </View>
  );
}
