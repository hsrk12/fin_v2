import { User } from "../models/user";
const sqlite3 = require('sqlite3');

// //Connect to db
// let db = new sqlite3.Database('fin.db', (err: any) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log('Connected to the chinook database.');
//   });

//I
let db = new sqlite3.Database('fin.db',sqlite3.OPEN_READWRITE, (err: any) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the fin database.');
    console.log('inserting User record');
    
});






