// src/components/Leaderboard.tsx
import React, { useState, useEffect } from "react";
import {
    Text,
    Image,
    FlatList,
    ListRenderItemInfo,
    TouchableOpacity,
    View,
    TextInput,
    Button,
    ActivityIndicator,
} from "react-native";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "../types";
import { fetchLeaderboard } from "../services/api";
import { useNavigation } from "@react-navigation/native";
import { UserDetailScreenNavigationProp } from "../types/navigation";
import { UserList } from "./UserList";

export const Leaderboard: React.FC = () => {
    const navigation = useNavigation<UserDetailScreenNavigationProp>();
    const queryClient = useQueryClient();
    const [searchUsername, setSearchUsername] = useState<string>("");
    const [displayedUsers, setDisplayedUsers] = useState<User[]>([]);
    const [triggerFetch, setTriggerFetch] = useState<boolean>(true);

    const {
        data: users,
        isLoading,
        error,
    } = useQuery<User[], Error>({
        queryKey: ["leaderboard", searchUsername],
        queryFn: () => fetchLeaderboard(searchUsername),
        enabled: triggerFetch,
    });

    useEffect(() => {
        if (users && triggerFetch) {
            setDisplayedUsers(users);
            setTriggerFetch(false);
        }
    }, [users, triggerFetch]);

    const handleSearch = () => {
        setTriggerFetch(true);
        queryClient.invalidateQueries({ queryKey: ["leaderboard", searchUsername] });
    };

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

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <TextInput
                    placeholder="Search by username"
                    value={searchUsername}
                    onChangeText={setSearchUsername}
                    style={{ flex: 1, marginRight: 10, borderWidth: 1, borderColor: "gray", padding: 10 }}
                />
                <Button title="Search" onPress={handleSearch} />
            </View>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <UserList data={displayedUsers} navigation={navigation} />
                // <FlatList data={displayedUsers} keyExtractor={(item) => item._id} renderItem={renderItem} />
            )}
            {error && <Text>Error: {error.message}</Text>}
        </View>
    );
};
