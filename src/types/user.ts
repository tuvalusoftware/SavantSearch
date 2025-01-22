export enum UserRole {
    User = 0,
    Admin = 1
}

export type User = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    role: UserRole;
};
