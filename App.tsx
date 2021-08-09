import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import SettingsScreen from "./screens/SettingsScreen";
import DetailsScreen from "./screens/DetailsScreen";
import MoreSettingsScreen from "./screens/MoreSettingsScreen";
import OtherSettingsScreen from "./screens/OtherSettingsScreen";
import ImportantScreen from "./screens/ImportantScreen";
import {
  BottomTabsParamList,
  HomeStackParamList,
  SettingsStackParamList,
} from "./types";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Details" component={DetailsScreen} />
  </HomeStack.Navigator>
);

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    <SettingsStack.Screen name="MoreSettings" component={MoreSettingsScreen} />
    <SettingsStack.Screen
      name="OtherSettings"
      component={OtherSettingsScreen}
    />
    <SettingsStack.Screen name="Important" component={ImportantScreen} />
  </SettingsStack.Navigator>
);

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
