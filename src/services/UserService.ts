import { User } from "../models/user";

const sqlite3 = require('sqlite3');

export class UserService{
    private user: User;

    constructor(user: User) {
        this.user = user;
      }

public insert_user(user_data: any): void{
    let db = new sqlite3.Database('fin.db',sqlite3.OPEN_READWRITE, (err: any) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Connected to the fin database.');
        console.log('inserting User record');
    
    });
    db.close();
}

public updateUser(userData: any): void{
    
}


}




