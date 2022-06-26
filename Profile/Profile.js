import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import WoofButton from "../shared/WoofButton/WoofButton";
import AuthContext from "../Context/AuthContext";

const ProfileScreen = () => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <WoofButton
        text="Log out"
        onPress={signOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold"
  }
});


export default ProfileScreen;
