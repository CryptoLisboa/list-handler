// src/components/Leaderboard.tsx
import React from "react";
import { Text, Image, FlatList, ListRenderItemInfo, TouchableOpacity } from "react-native";
import { User } from "../types";
import { UserDetailScreenNavigationProp } from "../types/navigation";

type UserListProps = {
    data: User[];
    navigation: UserDetailScreenNavigationProp;
};

export const UserList: React.FC<UserListProps> = ({ data, navigation }) => {
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

    return <FlatList data={data} keyExtractor={(item) => item._id} renderItem={renderItem} />;
};
