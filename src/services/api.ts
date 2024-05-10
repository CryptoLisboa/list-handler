// src/services/api.ts
import axios from "axios";
import { ApiResponse, User } from "../types";

// Modify the function to accept an optional username parameter
export const fetchLeaderboard = async (username: string = ""): Promise<User[]> => {
    const response = await axios.get<ApiResponse>("https://api.bags.fm/api/v1/user/get_user_leaderboard");
    if (response.data.success) {
        let users = response.data.response;

        // If a username is provided, filter the results client-side
        if (username) {
            users = users.filter((user) => user.username.toLowerCase().includes(username.toLowerCase()));
        }

        return users;
    } else {
        throw new Error(response.data.message || "Fetching data failed");
    }
};
