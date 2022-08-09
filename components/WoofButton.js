import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const WoofButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.woofButton}
      activeOpacity={0.8}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default WoofButton;

const styles = StyleSheet.create({
  woofButton: {
    borderRadius: 8,
    backgroundColor: "burlywood",
    margin: 16,
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
