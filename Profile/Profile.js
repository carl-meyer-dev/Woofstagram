import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WoofButton from "../shared/WoofButton";
import AuthContext from "../Context/AuthContext";
import Avatar from "../shared/Avatar";
import Data from "../Home/Data";
import Heading from "../shared/Heading";
import ProfileItem from "./ProfileItem";

const ProfileScreen = () => {
  const { signOut } = React.useContext(AuthContext);
  const profile = Data.woofs[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeading}>
        <Avatar url={profile.avatar}></Avatar>
        <Heading>{profile.name}</Heading>
      </View>
      <View style={styles.profileDetails}>
        <ProfileItem
          icon="calendar-outline"
          description="Date Of Birth"
          value={profile.dateOfBirth}
        ></ProfileItem>
        <ProfileItem
          icon="paw-outline"
          description="Breed"
          value={profile.breed}
        ></ProfileItem>
        <ProfileItem
          icon="tennisball-outline"
          description="Favorite Toy"
          value={profile.toy}
        ></ProfileItem>
        <ProfileItem
          icon="person-outline"
          description="CareTaker"
          value={profile.caretaker}
        ></ProfileItem>
        <ProfileItem
          icon="mail-outline"
          description="Email"
          value={profile.email}
        ></ProfileItem>
      </View>
      <View style={styles.profileFooter}>
        <WoofButton text="Log out" onPress={signOut} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "whitesmoke",
  },
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
});

export default ProfileScreen;
