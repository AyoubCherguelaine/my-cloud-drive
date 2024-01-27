interface LoginUserData {
    email: string;
    password: string;
}

export class User {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public username: string,
        public email: string
    ) {}

    getFullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }

    displayDetails(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Full Name: ${this.getFullName()}`);
        console.log(`Username: ${this.username}`);
        console.log(`Email: ${this.email}`);
    }

    static checkLogin(login: LoginData): any {
        // Implementation for checking login
    }

    static registerUser(register: RegisterData): any {
        // Implementation for registering a user
    }

    static extractToken(): string {
        // Implementation for extracting a token
        return "";
    }

    static getUserByToken(token: string): User | null {
        // Implementation for getting a user by token
        // Return null if user not found
        return null;
    }

    static getUserByEmail(email: string): User | null {
        // Implementation for getting a user by email
        // Return null if user not found
        return null;
    }

    static getUserByUsername(username: string): User | null {
        // Implementation for getting a user by username
        // Return null if user not found
        return null;
    }

    getIdByEmail(): number {
        return 1;
    }

    getIdByUsername(): number {
        return 1;
    }
}

export class LoginData extends User implements LoginUserData {
    constructor(public email: string, public password: string) {
        super(0, "", "", "", email);
    }
}

interface RegistrationData extends LoginUserData {
    firstname: string;
    lastname: string;
}

export class RegisterData extends User implements RegistrationData {
    constructor(public email: string, public firstname: string, public lastname: string, public password: string) {
        super(0, firstname, lastname, "", email);
    }
}

