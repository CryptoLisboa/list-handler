import React from "react";
import { View, Text, Image, FlatList, ListRenderItemInfo } from "react-native";
import { useQuery } from "react-query";
import axios from "axios";
import { ApiResponse, User } from "../types";

// Fetch data
const fetchLeaderboard = async (): Promise<User[]> => {
    try {
        console.log("Fetching data");
        const { data } = await axios.get<ApiResponse>("https://api.bags.fm/api/v1/user/get_user_leaderboard");
        if (data.success) {
            return data.response;
        } else {
            throw new Error("Fetching data failed");
        }
    } catch (error) {
        console.error(error);
        throw new Error("Fetching data failed");
    }
};

// List Item Component
const renderItem = ({ item, index }: ListRenderItemInfo<User>) => (
    <View
        style={{
            flexDirection: "row",
            padding: 10,
            alignItems: "center",
        }}
    >
        <Image source={{ uri: item.picture }} style={{ width: 50, height: 50, borderRadius: 25 }} />
        <Text style={{ marginLeft: 10 }}>
            #{index + 1} - {item.username}
        </Text>
    </View>
);

// List Component
export const List: React.FC = () => {
    const { data: users, isLoading, error } = useQuery<User[]>("leaderboard", fetchLeaderboard);

    if (isLoading) return <Text>Loading...</Text>;
    if (error instanceof Error) return <Text>Error: {error.message}</Text>;

    return <FlatList data={users} keyExtractor={(item) => item._id} renderItem={renderItem} />;
};
