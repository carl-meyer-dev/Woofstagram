import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import WoofButton from "../shared/WoofButton";
import AuthContext from "../Context/AuthContext";
import Avatar from "../shared/Avatar";
import Data from "../Home/Data";
import Heading from "../shared/Heading";
import Ionicons from "react-native-vector-icons/Ionicons";

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
        <View style={styles.profileItem}>
          <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "grey"}}>
            <Ionicons name="paw" size={32}></Ionicons>
            <Text style={{paddingHorizontal: 8}}>Date Of Birth</Text>
          </View>
          <View style={{backgroundColor: "orange"}}>
            <Text style={{padding: 8}}>{profile.dateOfBirth}</Text>
          </View>
        </View>
        <View style={styles.profileItem}>
          <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "grey"}}>
            <Ionicons name="paw" size={32}></Ionicons>
            <Text style={{paddingHorizontal: 8}}>Breed</Text>
          </View>
          <View style={{backgroundColor: "orange"}}>
            <Text style={{padding: 8}}>{profile.breed}</Text>
          </View>
        </View>
        <View style={styles.profileItem}>
          <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "grey"}}>
            <Ionicons name="paw" size={32}></Ionicons>
            <Text style={{paddingHorizontal: 8}}>Favorite Toy</Text>
          </View>
          <View style={{backgroundColor: "orange"}}>
            <Text style={{padding: 8}}>{profile.toy}</Text>
          </View>
        </View>
        <View style={styles.profileItem}>
          <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "grey"}}>
            <Ionicons name="paw" size={32}></Ionicons>
            <Text style={{paddingHorizontal: 8}}>Caretaker</Text>
          </View>
          <View style={{backgroundColor: "orange"}}>
            <Text style={{padding: 8}}>{profile.caretaker}</Text>
          </View>
        </View>
        <View style={styles.profileItem}>
          <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "grey"}}>
            <Ionicons name="paw" size={32}></Ionicons>
            <Text style={{paddingHorizontal: 8}}>Email</Text>
          </View>
          <View style={{backgroundColor: "orange"}}>
            <Text style={{padding: 8}}>{profile.email}</Text>
          </View>
        </View>
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
