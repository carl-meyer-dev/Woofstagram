import { Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthContext from "../Context/AuthContext";
import React from "react";

const SignOutButton = () => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <TouchableOpacity
      onPress={signOut}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Text style={{ paddingHorizontal: 8 }}>Sign Out</Text>
      <Ionicons name="exit-outline" size={32}></Ionicons>
    </TouchableOpacity>
  );
};

export default SignOutButton;
