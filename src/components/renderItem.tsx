import React from "react";
import { TouchableOpacity, Text, Image, ListRenderItemInfo } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { User } from "../types";

export const renderItem = ({ item, index }: ListRenderItemInfo<User>) => {

    return (
        <TouchableOpacity
            style={{ flexDirection: "row", padding: 10, alignItems: "center" }}
            // onPress={() => navigation.navigate("UserDetail", { username: item.username })}
        >
            <Image source={{ uri: item.picture }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <Text style={{ marginLeft: 10 }}>
                #{index + 1} - {item.username}
            </Text>
        </TouchableOpacity>
    );
};
