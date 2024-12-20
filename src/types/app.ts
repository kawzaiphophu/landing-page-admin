export interface ISignIn {
    access_token: string;
    user: User;
    file: null;
    role:string
}

export interface User {
    firstName: string;
    lastName: string;
}
