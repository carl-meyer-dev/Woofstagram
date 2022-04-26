import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [petName, setPetName] = useState("");
  const [petDob, setPetDob] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petToy, setPetToy] = useState("");

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContainer} keyboardOpeningTime={0}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TextField
          title="Email"
          placeholder="email@example.com"
          value={email}
          setValue={setEmail}
        ></TextField>
        <TextField
          title="Password"
          placeholder="secret password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        ></TextField>
        <TextField
          title="Pet's Name"
          placeholder="your pet's name"
          value={petName}
          setValue={setPetName}
        ></TextField>
        <TextField
          title="Pet's Date of Birth"
          placeholder="dd/mm/yyyy"
          value={petDob}
          setValue={setPetDob}
        ></TextField>
        <TextField
          title="Breed"
          placeholder="your pet's breed"
          value={petBreed}
          setValue={setPetBreed}
        ></TextField>
        <TextField
          title="Favorite Toy"
          placeholder="your pet's favourite toy"
          value={petToy}
          setValue={setPetToy}
        ></TextField>
        <FormButton text="Submit" onSubmit={onSubmit}></FormButton>
      </View>
    </KeyboardAwareScrollView>
  );

  function onSubmit() {
    try {
      const data = {
        email,
        password,
        petName,
        petDob,
        petBreed,
        petToy,
      };

      console.table(data);
    } catch (e) {
      console.error("Invalid Form Entry!");
    }
  }
};

const TextField = ({
  title,
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formText}>{title}</Text>
      <TextInput
        style={styles.formInput}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const FormButton = ({ text, onSubmit }) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.formButton}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "aliceblue",
  },
  formContainer: {
    borderRadius: 20,
    padding: 8,
  },
  formText: {
    padding: 8,
    color: "black",
  },
  formInput: {
    height: 40,
    width: 200,
    borderRadius: 8,
    padding: 8,
    color: "black",
    backgroundColor: "white",
  },
  formButton: {
    borderRadius: 8,
    backgroundColor: "lightcoral",
    margin: 16,
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
