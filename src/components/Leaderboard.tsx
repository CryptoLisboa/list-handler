// src/components/Leaderboard.tsx
import React from "react";
import { View, Text, Image, FlatList, ListRenderItemInfo } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { User } from "../types";
import { fetchLeaderboard } from "../services/api";

export const Leaderboard: React.FC = () => {
    const {
        data: users,
        isLoading,
        error,
    } = useQuery<User[], Error>({
        queryKey: ["leaderboard"],
        queryFn: fetchLeaderboard,
    });

    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    const renderItem = ({ item, index }: ListRenderItemInfo<User>) => (
        <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
            <Image source={{ uri: item.picture }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <Text style={{ marginLeft: 10 }}>
                #{index + 1} - {item.username}
            </Text>
        </View>
    );

    return <FlatList data={users} keyExtractor={(item) => item._id} renderItem={renderItem} />;
};
