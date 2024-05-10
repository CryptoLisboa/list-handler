// src/components/Leaderboard.tsx
import React from "react";
import { Text, Image, FlatList, ListRenderItemInfo, TouchableOpacity } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { User } from "../types";
import { fetchLeaderboard } from "../services/api";
import { useNavigation } from "@react-navigation/native";
import { UserDetailScreenNavigationProp } from "../types/navigation"; // Adjust the import path as necessary

export const Leaderboard: React.FC = () => {
    const navigation = useNavigation<UserDetailScreenNavigationProp>();
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

    const renderItem = ({ item, index }: ListRenderItemInfo<User>) => {
        return (
            <TouchableOpacity
                style={{ flexDirection: "row", padding: 10, alignItems: "center" }}
                onPress={() => navigation.navigate("UserDetail", { username: item.username })}
            >
                <Image source={{ uri: item.picture }} style={{ width: 50, height: 50, borderRadius: 25 }} />
                <Text style={{ marginLeft: 10 }}>
                    #{index + 1} - {item.username}
                </Text>
            </TouchableOpacity>
        );
    };

    return <FlatList data={users} keyExtractor={(item) => item._id} renderItem={renderItem} />;
};
