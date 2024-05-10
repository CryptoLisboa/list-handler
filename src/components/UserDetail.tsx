// src/components/UserDetail.tsx
import React, { FunctionComponent, useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { UserDetails } from "../types/model";
import { RootStackParamList } from "../types/navigation";

export const UserDetail: FunctionComponent = () => {
    const route = useRoute<RouteProp<RootStackParamList, "UserDetail">>();
    const { username } = route.params;
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch(`https://api.bags.fm/api/v1/user/${username}`)
            .then((response) => response.json())
            .then((data) => {
                setUserDetails(data.response);
                setLoading(false);
            })
            .catch((error: Error) => {
                console.error("Error:", error);
                setError(error);
                setLoading(false);
            });
    }, [username]);

    if (isLoading) return <ActivityIndicator />;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View style={{ padding: 20 }}>
            <Text>Username: {userDetails?.username}</Text>
            <Text>Membership Tier: {userDetails?.membership.tier}</Text>
        </View>
    );
};
