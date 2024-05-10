// src/components/Leaderboard.tsx
import React from "react";
import { Text, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { User } from "../types";
import { fetchLeaderboard } from "../services/api";
import { renderItem } from "./renderItem";

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

    return <FlatList data={users} keyExtractor={(item) => item._id} renderItem={renderItem} />;
};
