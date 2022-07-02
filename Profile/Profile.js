import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WoofButton from "../shared/WoofButton";
import AuthContext from "../Context/AuthContext";
import Data from "../Home/Data";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import WoofTextField from "../shared/WoofTextField";
import Avatar from "../shared/Avatar";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileScreen = () => {
  const { signOut } = React.useContext(AuthContext);
  const profile = Data.woofs[0];

  const save = (values) => {
    console.log(values);
  };

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
              <Text onPress={signOut} style={{ paddingHorizontal: 8 }}>
                Sign Out
              </Text>
              <Ionicons name="exit-outline" size={32}></Ionicons>
            </View>
            <View style={styles.profileHeading}>
              <Avatar url={profile.avatar}></Avatar>
            </View>
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
              value={values.caretaker}
              setValue={handleChange("caretaker")}
              onBlur={handleBlur("caretaker")}
            ></WoofTextField>
            <WoofButton text="Save" onSubmit={handleSubmit}></WoofButton>
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
    // backgroundColor: "red",
  },
  toolbar: {
    flexDirection: "row",
    // backgroundColor: "grey",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 8,
  },
});

export default ProfileScreen;
