import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from "react";

const ProfileItem = ({ description, value, icon }) => (
  <View style={styles.profileItem}>
    <View style={styles.ProfileItemDescription}>
      <Ionicons name={icon} size={32}></Ionicons>
      <Text style={{ paddingHorizontal: 16 }}>{description}:</Text>
    </View>
    <View style={styles.ProfileItemValue}>
      <Text>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "blue",
    width: "100%",
    paddingHorizontal: 16
  },
  ProfileItemDescription: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  ProfileItemValue: {
    flex: 1,
  },
});

export default ProfileItem;
