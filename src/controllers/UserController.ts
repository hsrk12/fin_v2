
import { UserService } from '../services/UserService';

export class UserController{
    private user_service: UserService;

    constructor(user_service: UserService) {
        this.user_service = user_service;
      }

      public createUser(req: Request): void{
        try{
            let user_data = req.body;
            this.user_service.insert_user(user_data);
        
        } catch (error) {
            console.log("create user request failed");
          }
      }

      public updateUser(req: Request): void{
        try{
            let user_data = req.body;
            this.user_service.updateUser(user_data);
        
        } catch (error) {
            console.log("update user request failed");
          }
      }
      
}