import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import screens from "../../constants/Screens";
import WoofTextField from "../../components/WoofTextField";
import WoofButton from "../../components/WoofButton";
import Heading from "../../components/Heading";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthContext from "../../contexts/AuthContext";

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
            <View style={{flex: 1, justifyContent: "flex-end", alignItems: "center"}}>
              <Heading>Woofstagram</Heading>
              <Ionicons name="paw" size={32}></Ionicons>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
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
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
              <WoofButton onPress={handleSubmit} text="Sign In" />
              <Text onPress={() => navigation.navigate(screens.Register)}>Sign Up</Text>
            </View>
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
