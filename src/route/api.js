import express from 'express';
import APIcontroller from '../controller/APIController';
let router = express.Router();

const initAPIRoute = (app)=>{
    router.get('/users', APIcontroller.getAllUsers);
    router.post('/create-user', APIcontroller.createNewUser);
    router.put('/update-user', APIcontroller.updateUser);
    router.delete('/delete-user/:id',APIcontroller.deleteUser);
   
    return app.use('/api/v1/',router);
    
}
export default initAPIRoute;
