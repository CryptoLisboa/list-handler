import { User } from "./model";

export interface ApiResponse {
    success: boolean;
    response: User[];
    error: string;
}
