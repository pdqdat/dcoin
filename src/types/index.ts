export interface User {
    id: string;
    email: string;
    password: string;
    role: string;
    name: string;
    // createdAt: DateTime;
    publicKey: string;
    privateKey: String;
}
