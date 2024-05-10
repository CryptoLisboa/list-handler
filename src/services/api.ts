// src/api.ts
import axios from "axios";
import { ApiResponse, User } from "../types";

export const fetchLeaderboard = async (): Promise<User[]> => {
    const response = await axios.get<ApiResponse>("https://api.bags.fm/api/v1/user/get_user_leaderboard");
    if (response.data.success) {
        return response.data.response;
    } else {
        throw new Error(response.data.message || "Fetching data failed");
    }
};
