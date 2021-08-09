import React from "react";
import { Button, View } from "react-native";
import { SettingsScreenNavigationProp } from "../types";

type Props = {
  navigation: SettingsScreenNavigationProp;
};

const SettingsScreen = ({ navigation }: Props) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Button
      title="More settings"
      onPress={() => navigation.navigate("MoreSettings")}
    />
    <Button
      title="Other settings"
      onPress={() => navigation.navigate("OtherSettings")}
    />
  </View>
);

export default SettingsScreen;
