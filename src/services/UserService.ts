const sqlite3 = require('sqlite3');

export class UserService{


    public insert_user(user_data: any): void{
        let db = new sqlite3.Database('fin.db',sqlite3.OPEN_READWRITE, (err: any) => {
            if (err) {
            console.error(err.message);
            }
            console.log('Connected to the fin database.');
            console.log('inserting User record');

            //TODO: check if user already exists
            let sql_check_if_exists = 'SELECT COUNT(*) AS count FROM Users WHERE userID = ?';
            db.get(sql_check_if_exists, [user_data.userID], function(err: Error, row: any){
            if(err){
                return console.log(err.message);
            }
            
            if(row.count > 0){
                    let sql = 'INSERT INTO Users(userID, user_name, user_email, user_phone) VALUES (?,?,?,?)';
                    db.run(sql,[user_data.userID, user_data.user_name, user_data.user_email, user_data.user_phone], function(err:Error){
                    if (err) {
                        return console.log(err.message);
                }
                    console.log(`A row has been inserted for ` + user_data.user_name);
            });
            } 
        });
    
    });
        db.close();
    }

    public delete_user(user_id: any){
        let db = new sqlite3.Database('fin.db',sqlite3.OPEN_READWRITE, (err: Error) => {
            if(err){
                console.log("connection failed");
            }
            console.log("connected to DB - deleting user if exists");
            
            let sql_check_if_exists = 'SELECT COUNT(*) AS count FROM Users WHERE userID = ?';
            db.get(sql_check_if_exists, [user_id], function(err: Error, row: any){
            if(err){
                return console.log(err.message);
            }
            
            if(row.count > 0){
                    let sql = "DELETE FROM Users WHERE userID = ?"
                    db.run(sql, [user_id], function(err:Error){
                        if(err){
                            console.log("delete failed");
                        }
                        console.log("delete succesful for " + user_id);
                    });
            }
            })
        })


    }

}



