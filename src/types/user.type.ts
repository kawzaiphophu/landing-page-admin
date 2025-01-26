export interface IUser {
    id?: number; // Unique identifier for the user
    username: string; // Username of the user
    email: string; // Email address of the user
    password: string;
    tel?: string;
    name?: string; // Optional first name of the user
    role?: string; // Optional role of the user (e.g., 'admin', 'user')
    status?: 'active' | 'inactive' | 'deleted'; // Status of the user (active, inactive, deleted)
    createdAt?: string; // Optional field for when the user was created (timestamp)
    updatedAt?: string; // Optional field for the last update timestamp
  }
  