// src/components/UserList.tsx
import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { UserDetailScreenNavigationProp } from "../types/navigation";
import { User } from "../types/model";

type UserListProps = {
    data: User[];
    navigation: UserDetailScreenNavigationProp;
};

export const UserList: React.FC<UserListProps> = ({ data, navigation }) => {
    const renderItem = ({ item, index }: { item: User; index: number }) => {
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
        <FlashList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            estimatedItemSize={80} // Adjust dynamically based on item height for given the device
        />
    );
};
