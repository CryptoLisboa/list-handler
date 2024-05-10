// src/components/renderItem.tsx
import React from "react";
import { View, Text, Image, ListRenderItemInfo } from "react-native";
import { User } from "../types";

export const renderItem = ({ item, index }: ListRenderItemInfo<User>) => (
    <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
        <Image source={{ uri: item.picture }} style={{ width: 50, height: 50, borderRadius: 25 }} />
        <Text style={{ marginLeft: 10 }}>
            #{index + 1} - {item.username}
        </Text>
    </View>
);
