import { StyleSheet, Text } from "react-native";

const Heading = (props) => <Text style={styles.heading}>{props.children}</Text>;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
});

export default Heading;
