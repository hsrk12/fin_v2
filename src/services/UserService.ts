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
        
        //TODO: check if user already exists
        db.run('INSERT INTO Users(userID, user_name, user_email, user_phone) VALUES (?,?,?,?)',[user_data.userID, user_data.user_name, user_data.user_email, user_data.user_phone], function(err){
            if (err) {
                return console.log(err.message);
              }
              // get the last insert id
              console.log(`A row has been inserted for ` + user_data.user_name);
        });
    
    });
    db.close();
}

public updateUser(userData: any): void{

}


}




