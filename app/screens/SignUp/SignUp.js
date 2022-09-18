import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const SignUpScreen = ({ navigation }) => (
    <View style={styles.layout}>
        <Text style={styles.title}>Sign Up</Text>
        <Button
            onPress={() => navigation.navigate("Sign In")}
            title="Sign In"
            color="#841584"
        />
    </View>
);

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: "center",
        padding: 8,
    },
    title: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default SignUpScreen;
