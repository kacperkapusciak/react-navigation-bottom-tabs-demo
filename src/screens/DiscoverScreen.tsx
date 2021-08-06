import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DiscoverScreen = () => (
  <View style={styles.container}>
    <Text>Discover!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default DiscoverScreen;
