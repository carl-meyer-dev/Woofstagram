import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../shared/Title";

const WoofPost = ({ image, title, description }) => (
    <View style={woofPostStyles.layout}>
        <Image style={woofPostStyles.image} source={{ uri: image }} />
        <View style={woofPostStyles.content}>
            <Title style={woofPostStyles.title}>{title}</Title>
            <Text style={woofPostStyles.description} numberOfLines={2}>
                {description}
            </Text>
        </View>
    </View>
);

const woofPostStyles = StyleSheet.create({
    layout: {
        marginBottom: 12,
        flexDirection: "row",
    },
    image: {
        flex: 1,
        borderRadius: 20,
        height: 80,
    },
    content: {
        flex: 2,
        marginLeft: 12,
        justifyContent: "center",
    },
    title: {},
    description: {
        marginTop: 6,
    },
});

export default WoofPost;
