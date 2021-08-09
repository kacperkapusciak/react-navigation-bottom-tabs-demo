import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ImportantScreen = () => (
  <View style={styles.container}>
    <MaterialIcons name="warning" color="#FFC107" size={50} />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ImportantScreen;
