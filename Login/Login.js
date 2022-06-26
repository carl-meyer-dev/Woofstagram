import * as React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import screens from "../core/Screens";
import WoofTextField from "../shared/WoofTextField/WoofTextField";
import WoofButton from "../shared/WoofButton/WoofButton";
import * as SecureStore from "expo-secure-store";

const Login = ({ navigation }) => {
  const login = async () =>
    await SecureStore.setItemAsync("userToken", "1234567890");

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollViewContainer}
      keyboardOpeningTime={0}
    >
      <Formik
        initialValues={{ email: "carl@meyer.com", password: "123" }}
        onSubmit={(values) => {
          if (values.email === "carl@meyer.com" && values.password === "123") {
            login();
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <WoofTextField
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="email@example.com"
            />
            <WoofTextField
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true}
              placeholder="enter password"
            />
            <WoofButton onPress={handleSubmit} text="Submit" />
            <WoofButton
              onPress={() => navigation.navigate(screens.Register)}
              text="Register"
            />
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
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
    backgroundColor: "whitesmoke",
  },
});

export default Login;
