import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import WoofButton from "../shared/WoofButton";
import AuthContext from "../Context/AuthContext";
import Data from "../Home/Data";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { StatusBar } from "expo-status-bar";
import WoofTextField from "../shared/WoofTextField";

const ProfileScreen2 = () => {
  const { signOut } = React.useContext(AuthContext);
  const profile = Data.woofs[0];

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
          caretaker: profile.caretaker
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
            <WoofTextField
              title="Caretaker"
              placeholder="your pet's owner"
              value={values.petToy}
              setValue={handleChange("petToy")}
              onBlur={handleBlur("petToy")}
            ></WoofTextField>
            <WoofButton text="Save" onSubmit={handleSubmit}></WoofButton>
            <Text onPress={signOut}>Sign Out</Text>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
  },
  profileHeading: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  profileDetails: {
    // backgroundColor: "yellow",
    width: "100%",
    flex: 1,
    justifyContent: "space-evenly",
  },
  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "blue",
    width: "100%",
  },
  profileFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green",
    width: "100%",
  },
  toolbar: {
    flexDirection: "row",
    // backgroundColor: "grey",
    justifyContent: "flex-end",
    width: "100%",
  },
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

export default ProfileScreen2;
