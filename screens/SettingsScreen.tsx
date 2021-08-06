import React from "react";
import { Button, View } from "react-native";
import { SettingsScreenNavigationProp } from "../types";

type Props = {
  navigation: SettingsScreenNavigationProp;
};

const SettingsScreen = ({ navigation }: Props) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Button
      title="First setting"
      onPress={() => navigation.navigate("MoreSettings")}
    />
    <Button
      title="Second setting"
      onPress={() => navigation.navigate("MoreSettings")}
    />
    <Button
      title="Third setting"
      onPress={() => navigation.navigate("MoreSettings")}
    />
  </View>
);

export default SettingsScreen;
