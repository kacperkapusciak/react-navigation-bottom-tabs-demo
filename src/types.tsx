import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";

// navigator types
export type HomeStackParamList = {
  Home: undefined;
  Details: { place: string };
};

export type SettingsStackParamList = {
  Settings: undefined;
  MoreSettings: undefined;
};

export type BottomTabsParamList = {
  Home: undefined;
  Discover: undefined;
  Settings: undefined;
};

// screen types
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  "Home"
>;

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  "Details"
>;

export type DetailsScreenRouteProp = RouteProp<HomeStackParamList, "Details">;

export type SettingsScreenNavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  "Settings"
>;
