import React from "react";
import { Dimensions, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { List } from "./List";

// App Component
export default function App() {
    return (
        <View style={{ height: Dimensions.get("window").height, width: Dimensions.get("window").width }}>
            <List />
            <StatusBar style="auto" />
        </View>
    );
}
