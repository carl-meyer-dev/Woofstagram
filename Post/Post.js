import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Formik } from "formik";
import WoofTextField from "../components/WoofTextField";
import WoofButton from "../components/WoofButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImagePicker from "../components/ImagePicker";
import WoofImagePicker from "../components/ImagePicker";

const post = (values) => {
  console.log(values);
};

const PostScreen = () => (
  <KeyboardAwareScrollView
    contentContainerStyle={styles.scrollViewContainer}
    keyboardOpeningTime={0}
  >
    <Formik
      initialValues={{
        title: "",
        description: ""
      }}
      onSubmit={(values) => post(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <SafeAreaView style={styles.container}>
          <WoofImagePicker></WoofImagePicker>
          <WoofTextField
            title="Title"
            placeholder="My Woofer is a floofer"
            value={values.email}
            setValue={handleChange("title")}
            onBlur={handleBlur("title")}
            width={300}
          ></WoofTextField>
          <WoofTextField
            title="Description"
            placeholder="A floofer is a big ol' Woofer, but shouldn't be confused with a growler. Steer clear of growlers!"
            value={values.petName}
            setValue={handleChange("description")}
            onBlur={handleBlur("description")}
            multiline
            width={300}
          ></WoofTextField>
          <WoofButton text="Post" onSubmit={handleSubmit}></WoofButton>
        </SafeAreaView>
      )}
    </Formik>
  </KeyboardAwareScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke"
  },
  scrollViewContainer: {
    flexGrow: 1
  },
  profileHeading: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  toolbar: {
    alignItems: "flex-end",
    width: "100%",
    paddingHorizontal: 8
  }
});

export default PostScreen;
