import { Image, StyleSheet } from "react-native";

const Avatar = (props) => (
    <Image style={styles.avatar} source={{ uri: props.url }} />
);

const styles = StyleSheet.create({
    avatar: {
        width: 64,
        height: 64,
        margin: 12,
        borderRadius: 64 / 2,
    }
});

export default Avatar;
