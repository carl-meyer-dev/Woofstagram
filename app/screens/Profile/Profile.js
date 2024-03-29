import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import WoofButton from "../../components/WoofButton";
import Data from "../../api/Data";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import WoofTextField from "../../components/WoofTextField";
import Avatar from "../../components/Avatar";
import SignOutButton from "./SignOutButton";
import { clearData } from "../../api/LocalStorage";

const ProfileScreen = () => {
  const profile = Data.woofs[0];

  const save = (values) => {
    console.log(values);
  };

  const clearLocalStorage = () => {
    clearData().then(r => console.log('Done'));
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollViewContainer}
      keyboardOpeningTime={0}
    >
      <Formik
        initialValues={{
          email: profile.email,
          petName: profile.name,
          petDob: profile.dateOfBirth,
          petBreed: profile.breed,
          petToy: profile.toy,
          caretaker: profile.caretaker,
        }}
        onSubmit={(values) => save(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <SafeAreaView style={styles.container}>
            <View style={styles.toolbar}>
              <SignOutButton></SignOutButton>
            </View>
            <View style={styles.profileHeading}>
              <Avatar url={profile.avatar}></Avatar>
            </View>
            <WoofTextField
              title="Email"
              placeholder="email@example.com"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            ></WoofTextField>
            <WoofTextField
              title="Pet's Name"
              placeholder="your pet's name"
              value={values.petName}
              onChangeText={handleChange("petName")}
              onBlur={handleBlur("petName")}
            ></WoofTextField>
            <WoofTextField
              title="Pet's Date of Birth"
              placeholder="dd/mm/yyyy"
              value={values.petDob}
              onChangeText={handleChange("petDob")}
              onBlur={handleBlur("petDob")}
            ></WoofTextField>
            <WoofTextField
              title="Breed"
              placeholder="your pet's breed"
              value={values.petBreed}
              onChangeText={handleChange("petBreed")}
              onBlur={handleBlur("petBreed")}
            ></WoofTextField>
            <WoofTextField
              title="Favorite Toy"
              placeholder="your pet's favourite toy"
              value={values.petToy}
              onChangeText={handleChange("petToy")}
              onBlur={handleBlur("petToy")}
            ></WoofTextField>
            <WoofTextField
              title="Caretaker"
              placeholder="your pet's owner"
              value={values.caretaker}
              onChangeText={handleChange("caretaker")}
              onBlur={handleBlur("caretaker")}
            ></WoofTextField>
            <WoofButton text="Save" onPress={() => handleSubmit()}></WoofButton>
            <WoofButton text="Clear Data" onPress={() => clearLocalStorage()}></WoofButton>
          </SafeAreaView>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  profileHeading: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  toolbar: {
    alignItems: "flex-end",
    width: "100%",
    paddingHorizontal: 8,
  },
});

export default ProfileScreen;
