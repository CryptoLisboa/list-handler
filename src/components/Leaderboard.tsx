// src/components/Leaderboard.tsx
import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button, ActivityIndicator } from "react-native";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchLeaderboard } from "../services/api";
import { useNavigation } from "@react-navigation/native";
import { UserDetailScreenNavigationProp } from "../types/navigation";
import { User } from "../types/model";
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
            {isLoading ? <ActivityIndicator /> : <UserList data={displayedUsers} navigation={navigation} />}
            {error && <Text>Error: {error.message}</Text>}
        </View>
    );
};
