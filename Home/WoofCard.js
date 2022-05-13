import { StyleSheet, View } from "react-native";
import Avatar from "./Avatar";

const WoofCard = (props) => (
    <View style={[woofCardStyles.card, woofCardStyles.boxShadow]}>
        <Avatar url={props.avatar} />
        <View style={woofCardStyles.title}>
            <Title>{props.name}</Title>
        </View>
    </View>
);

const woofCardStyles = StyleSheet.create({
    card: {
        borderRadius: 12,
        backgroundColor: "white",
        width: 88,
        height: 122,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
        marginRight: 16,
    },
    boxShadow:{
        shadowColor: '#E7E3EB',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5
    },
    title: {
        textAlign: "center",
    },
});

export default WoofCard;
