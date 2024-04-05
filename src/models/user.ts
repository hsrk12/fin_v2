export class User{
    private userID: number;
    private user_name: string;
    private user_email: string;
    private user_phone: number;
    
    constructor(userID: number,user_name: string, user_email: string, user_phone: number){
        this.userID = userID;
        this.user_name = user_name;
        this.user_email = user_email;
        this.user_phone = user_phone;
    }

    // Getters
    public getUserId(): number {
        return this.userID;
    }

    public getUserName(): string {
        return this.user_name;
    }

    public getUserEmail(): string {
        return this.user_email;
    }

    public getUserPhone(): number {
        return this.user_phone;
    }

    // Setters
    public setUserId(userID: number): void {
        this.userID = userID;
    }

    public setUserName(user_name: string): void {
        this.user_name = user_name;
    }

    public setUserEmail(user_email: string): void {
        this.user_email = user_email;
    }

    public setUserPhone(user_phone: number): void {
        this.user_phone = user_phone;
    }

}