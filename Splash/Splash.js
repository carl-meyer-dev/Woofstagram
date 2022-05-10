import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const Splash = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>Welcome to Woofstagram</Text>
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
