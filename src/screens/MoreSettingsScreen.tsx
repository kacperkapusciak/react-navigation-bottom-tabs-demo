import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MoreSettingsScreen = () => (
  <View style={styles.container}>
    <Text>More settings!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default MoreSettingsScreen;
