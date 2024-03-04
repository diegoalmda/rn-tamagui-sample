import { Dimensions } from "react-native";
import { Text, View } from "tamagui";

const DIMENSIONS = Dimensions.get("window");
const SHEET_HEIGHT = 220;

export const Sheet = () => {
  return (
    <View
      w={DIMENSIONS.width}
      h={SHEET_HEIGHT}
      bg="#1E1F23"
      pos="absolute"
      bottom="$0"
    >
      <Text p="$8" fos="$8">
        Opções
      </Text>
    </View>
  );
};
