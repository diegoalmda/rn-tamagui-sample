import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="home/index" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="signIn/index"
        options={{
          title: "Sign In",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
