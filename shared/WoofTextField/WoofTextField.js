import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const WoofTextField = ({
  title,
  value,
  setValue,
  onBlur,
  placeholder,
  secureTextEntry,
  onSubmitEditing,
}) => {
  return (
    <View style={styles.woofContainer}>
      <Text style={styles.woofText}>{title}</Text>
      <TextInput
        style={styles.woofInput}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  woofContainer: {
    borderRadius: 20,
    padding: 8,
  },
  woofText: {
    padding: 8,
    color: "black",
  },
  woofInput: {
    height: 40,
    width: 200,
    borderRadius: 8,
    padding: 8,
    color: "black",
    backgroundColor: "white",
  },
});

export default WoofTextField;
