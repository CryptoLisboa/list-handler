import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { RouteProp } from "@react-navigation/native";

// define the types for the navigation stack parameters
type RootStackParamList = {
    UserDetail: {
        username: string;
    };
};

type UserDetailScreenRouteProp = RouteProp<RootStackParamList, "UserDetail">;

type UserDetailProps = {
    route: UserDetailScreenRouteProp;
};

type UserDetails = {
    username: string;
    membership: {
        tier: string;
    };
    [key: string]: any; // for any additional dynamic fields
};

export const UserDetail = ({ route }: UserDetailProps) => {
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
            // Add more fields as needed
        </View>
    );
};
