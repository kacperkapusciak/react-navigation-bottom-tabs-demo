import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { MoreSettingsScreenNavigationProp } from "../types";

type Props = {
  navigation: MoreSettingsScreenNavigationProp;
};

const MoreSettingsScreen = ({ navigation }: Props) => (
  <View style={styles.container}>
    <Button
      title="See important info"
      onPress={() => navigation.navigate("Important")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default MoreSettingsScreen;
