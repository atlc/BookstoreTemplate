export interface User {
    id: number;
    email: string;
    password: string;
    created_at: Date;
}

export interface Category {
    id: number;
    name: string;
}

export interface Book {
    id: number;
    category_id: Category["id"];
    title: string;
    author: string;
    price: number;
    created_at: Date;
}

export interface Payload {
    id: User["id"];
    email: User["email"];
}

// Use the below if you're using passport
declare global {
    namespace Express {
        export interface User extends Payload {}
    }
}

// Use the below if you're doing auth from scratch
/*
declare global {
    namespace Express {
        export interface Request {
            user: Payload;
        }
    }
}
*/
