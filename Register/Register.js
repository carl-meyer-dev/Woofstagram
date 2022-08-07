import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import WoofTextField from "../components/WoofTextField";
import WoofButton from "../components/WoofButton";
import screens from "../core/Screens";

const Register = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollViewContainer}
      keyboardOpeningTime={0}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
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
            <WoofTextField
              title="Email"
              placeholder="email@example.com"
              value={values.email}
              setValue={handleChange("email")}
              onBlur={handleBlur("email")}
            ></WoofTextField>
            <WoofTextField
              title="Password"
              placeholder="enter password"
              value={values.password}
              setValue={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry={true}
            ></WoofTextField>
            <WoofTextField
              title="Confirm Password"
              placeholder="re-enter password"
              value={values.confirmPassword}
              setValue={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              secureTextEntry={true}
              onSubmitEditing={(e) => {
                confirmPasswordsMatch(e.nativeEvent.text, values.password);
              }}
            ></WoofTextField>
            <WoofTextField
              title="Pet's Name"
              placeholder="your pet's name"
              value={values.petName}
              setValue={handleChange("petName")}
              onBlur={handleBlur("petName")}
            ></WoofTextField>
            <WoofTextField
              title="Pet's Date of Birth"
              placeholder="dd/mm/yyyy"
              value={values.petDob}
              setValue={handleChange("petDob")}
              onBlur={handleBlur("petDob")}
            ></WoofTextField>
            <WoofTextField
              title="Breed"
              placeholder="your pet's breed"
              value={values.petBreed}
              setValue={handleChange("petBreed")}
              onBlur={handleBlur("petBreed")}
            ></WoofTextField>
            <WoofTextField
              title="Favorite Toy"
              placeholder="your pet's favourite toy"
              value={values.petToy}
              setValue={handleChange("petToy")}
              onBlur={handleBlur("petToy")}
            ></WoofTextField>
            <WoofButton text="Register" onSubmit={handleSubmit}></WoofButton>
            <Text onPress={() => navigation.navigate(screens.Login)}>Sign In</Text>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

function confirmPasswordsMatch(confirmation, original) {
  if (confirmation !== original) {
    alert("Passwords do not match, please try again.");
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
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
    backgroundColor: "burlywood",
    margin: 16,
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Register;
