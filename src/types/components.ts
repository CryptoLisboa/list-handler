import { User } from "../types";
import { UserDetailScreenNavigationProp } from "./navigation";

export type UserListProps = {
    data: User[];
    navigation: UserDetailScreenNavigationProp;
};
