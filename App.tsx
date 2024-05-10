// App.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { queryClient } from "./src/services/QueryClient";
import { Leaderboard } from "./src/components/Leaderboard";

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <View style={styles.container}>
                <Leaderboard />
            </View>
            <StatusBar style="auto" />
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
