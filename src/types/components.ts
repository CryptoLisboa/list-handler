// import { User } from "../types";
import { User } from "./model";
import { UserDetailScreenNavigationProp } from "./navigation";

export type UserListProps = {
    data: User[];
    navigation: UserDetailScreenNavigationProp;
};
