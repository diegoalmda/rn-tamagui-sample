import { XStack, Text, View } from "tamagui";
import { Container } from "styles/layouts";
import { FlatList, SectionList } from "react-native";
import React from "react";

const menu = [
  "Item1",
  "Item2",
  "Item3",
  "Item4",
  "Item5",
  "Item6",
  "Item7",
  "Item8",
];

const sectionItems = [
  {
    title: "Section title 1",
    data: ["Section item 1", "Section item 2", "Section item 3"],
  },
  {
    title: "Section title 1",
    data: ["Section item 1", "Section item 2", "Section item 3"],
  },
  {
    title: "Section title 1",
    data: ["Section item 1", "Section item 2", "Section item 3"],
  },
  {
    title: "Section title 1",
    data: ["Section item 1", "Section item 2"],
  },
];

export default function Page() {
  return (
    <Container>
      <FlatList
        data={menu}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <XStack
            bg="$backgroundFocus"
            p="$4"
            m="$1"
            w="$8"
            ai="center"
            jc="center"
            br="$2"
          >
            <Text col="$gray9Light">{item}</Text>
          </XStack>
        )}
        contentContainerStyle={{
          gap: 12,
          paddingHorizontal: 2,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces={false}
      />

      <View paddingVertical="$2" />
      <SectionList
        sections={sectionItems}
        keyExtractor={(item) => item}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <XStack
            bg="$gray10Light"
            p="$2"
            m="$1"
            w="98%"
            h="$8"
            ai="center"
            jc="center"
            br="$2"
          >
            <Text col="$background">{item}</Text>
          </XStack>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingBottom: 36,
          paddingTop: 8,
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text col="$blue10">{title}</Text>
        )}
        bounces={false}
        overScrollMode={"auto"}
      />
    </Container>
  );
}
