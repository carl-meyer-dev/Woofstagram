import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const WoofTextField = ({
  title,
  value,
  onChangeText,
  onBlur,
  placeholder,
  secureTextEntry,
  onSubmitEditing,
  ...props
}) => {
  return (
    <View style={styles.woofTextFieldContainer}>
      <Text style={styles.woofText}>{title}</Text>
      <TextInput
        {...props}
        style={styles.woofInput}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="grey"
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        width={props.width ? props.width : 200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  woofTextFieldContainer: {
    borderRadius: 20,
    padding: 8,
  },
  woofText: {
    padding: 8,
    color: "black",
  },
  woofInput: {
    borderRadius: 8,
    padding: 8,
    color: "black",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "burlywood",
  },
});

export default WoofTextField;
