import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import WoofButton from "../shared/WoofButton";
import AuthContext from "../Context/AuthContext";
import Avatar from "../shared/Avatar";
import Data from "../Home/Data";
import Heading from "../shared/Heading";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileItem from "./ProfileItem";

const ProfileScreen = () => {
  const { signOut } = React.useContext(AuthContext);
  const profile = Data.woofs[0];

  return (
    <View style={styles.container}>
      <View style={styles.profileHeading}>
        <Avatar url={profile.avatar}></Avatar>
        <Heading>{profile.name}</Heading>
      </View>
      <View style={styles.profileDetails}>
        <ProfileItem description="Date Of Birth" value={profile.dateOfBirth}></ProfileItem>
        <ProfileItem description="Breed" value={profile.breed}></ProfileItem>
        <ProfileItem description="Favorite Toy" value={profile.toy}></ProfileItem>
        <ProfileItem description="CareTaker" value={profile.caretaker}></ProfileItem>
        <ProfileItem description="Email" value={profile.email}></ProfileItem>
      </View>
      <View style={styles.profileFooter}>
        <WoofButton text="Log out" onPress={signOut} />
      </View>
    </View>
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
    backgroundColor: "red",
  },
  profileDetails: {
    paddingHorizontal: 16,
    backgroundColor: "yellow",
    width: "100%"
  },
  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
    width: "100%",
  },
  profileFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    width: "100%",
  },
});

export default ProfileScreen;
