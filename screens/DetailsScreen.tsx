import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import { DetailsScreenNavigationProp, DetailsScreenRouteProp } from "../types";

type Props = {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
};

const DetailsScreen = ({ navigation, route }: Props) => {
  const { place } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: place,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>{place}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default DetailsScreen;
