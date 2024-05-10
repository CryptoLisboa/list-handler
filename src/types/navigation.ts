// src/types/navigation.ts
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
    Leaderboard: undefined;
    UserDetail: { username: string };
};

export type UserDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, "UserDetail">;

export type UserDetailScreenRouteProp = RouteProp<RootStackParamList, "UserDetail">;
