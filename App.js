import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";

const App = () => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollViewContainer}
      keyboardOpeningTime={0}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
          petName: "",
          petDob: "",
          petBreed: "",
          petToy: "",
        }}
        onSubmit={(values) => console.table(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <StatusBar style="auto" />
            <TextField
              title="Email"
              placeholder="email@example.com"
              value={values.email}
              setValue={handleChange("email")}
              onBlur={handleBlur("email")}
            ></TextField>
            <TextField
              title="Password"
              placeholder="secret password"
              value={values.password}
              setValue={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry={true}
            ></TextField>
            <TextField
              title="Pet's Name"
              placeholder="your pet's name"
              value={values.petName}
              setValue={handleChange("petName")}
              onBlur={handleBlur("petName")}
            ></TextField>
            <TextField
              title="Pet's Date of Birth"
              placeholder="dd/mm/yyyy"
              value={values.petDob}
              setValue={handleChange("petDob")}
              onBlur={handleBlur("petDob")}
            ></TextField>
            <TextField
              title="Breed"
              placeholder="your pet's breed"
              value={values.petBreed}
              setValue={handleChange("petBreed")}
              onBlur={handleBlur("petBreed")}
            ></TextField>
            <TextField
              title="Favorite Toy"
              placeholder="your pet's favourite toy"
              value={values.petToy}
              setValue={handleChange("petToy")}
              onBlur={handleBlur("petToy")}
            ></TextField>
            <FormButton text="Submit" onSubmit={handleSubmit}></FormButton>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

const TextField = ({
  title,
  value,
  setValue,
  onBlur,
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
        onBlur={onBlur}
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
