import * as React from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { StatusBar } from "expo-status-bar";
import WoofTextField from "../shared/WoofTextField/WoofTextField";
import WoofButton from "../shared/WoofButton/WoofButton";

const Login = ({ navigation }) => (
  <KeyboardAwareScrollView
    contentContainerStyle={styles.scrollViewContainer}
    keyboardOpeningTime={0}
  >
    <Formik
      initialValues={{ email: "", password: "" }}
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
          <WoofButton text="Login" onSubmit={handleSubmit}></WoofButton>
          <WoofButton text="Register"></WoofButton>
        </View>
      )}
    </Formik>
  </KeyboardAwareScrollView>
);

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  }
});

export default Login;
