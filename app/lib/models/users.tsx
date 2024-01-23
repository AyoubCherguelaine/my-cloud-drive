interface LoginUserData {
    email: string;
    password: string;
}

class LoginData implements LoginUserData {
    constructor(public email: string, public password: string) {}
}

interface RegistrationData extends LoginUserData {
    firstname: string;
    lastname: string;
}

class RegisterData implements RegistrationData {
    constructor(public email: string, public firstname: string, public lastname: string, public password: string) {}
}

class User {
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

    static regersterUser(regester:RegisterData):any{
        // Implementation for checking login
    }

    static exctractToken():string{
        return ""
    }
}
