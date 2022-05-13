import { StyleSheet, Text } from "react-native";

const Title = (props) => <Text style={styles.title}>{props.children}</Text>;

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Title;
