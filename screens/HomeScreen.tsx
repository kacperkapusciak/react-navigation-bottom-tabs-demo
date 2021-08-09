import React from "react";
import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { HomeScreenNavigationProp } from "../types";

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  const places = [
    "🏝️ Desert Island",
    "🏞️ National Park",
    "⛰️ Mountain",
    "🏰 Castle",
    "🗽 Statue of Liberty",
    "🌉 Bridge at Night",
    "🏦 Bank",
    "🏛️ Classical Building",
    "🏟️ Stadium",
    "🏪 Convenience Store",
    "🏫 School",
    "⛲ Fountain",
    "🌄 Sunrise Over Mountains",
    "🌆 Cityscape at Dusk",
    "🎡 Ferris Wheel",
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Details", {
                place: item,
              })
            }
          >
            <Text style={styles.item}>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 50,
  },
});

export default HomeScreen;
