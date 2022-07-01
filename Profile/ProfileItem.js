import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from "react";

const ProfileItem = ({description, value}) => (
  <View style={styles.profileItem}>
    <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "grey"}}>
      <Ionicons name="paw" size={32}></Ionicons>
      <Text style={{paddingHorizontal: 8}}>{description}</Text>
    </View>
    <View style={{backgroundColor: "orange"}}>
      <Text style={{padding: 8}}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
    width: "100%",
  },
});

export default ProfileItem;