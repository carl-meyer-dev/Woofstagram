import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import WoofButton from "../shared/WoofButton/WoofButton";
import * as SecureStore from "expo-secure-store";

const ProfileScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Profile</Text>
    <WoofButton
      text="Log out"
      onPress={async () => await SecureStore.setItemAsync("userToken", null)}
    />
  </View>
);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProfileScreen;
