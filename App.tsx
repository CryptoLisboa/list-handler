// App.tsx
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { queryClient } from "./src/services/QueryClient";
import { Leaderboard } from "./src/components/Leaderboard";
import { UserDetail } from "./src/components/UserDetail"; // Ensure UserDetail is correctly imported

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Leaderboard" component={Leaderboard} />
                    <Stack.Screen name="UserDetail" component={UserDetail} />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </QueryClientProvider>
    );
}
