import * as React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import screens from "../core/Screens";
import WoofTextField from "../shared/WoofTextField/WoofTextField";
import WoofButton from "../shared/WoofButton/WoofButton";
import { AuthContext } from "../App";

const Login = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollViewContainer}
      keyboardOpeningTime={0}
    >
      <Formik
        initialValues={{ username: "carl@meyer.com", password: "123" }}
        onSubmit={(values) => {
          let username = values.username;
          let password = values.password;
          signIn({username, password});
          // if (values.username === "carl@meyer.com" && values.password === "123") {
          //   signIn({username, password})
          // }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <WoofTextField
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              placeholder="email@example.com"
            />
            <WoofTextField
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true}
              placeholder="enter password"
            />
            <WoofButton onPress={handleSubmit} text="Sign In" />
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
