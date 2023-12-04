const UserService = require('../services/userService');
class UserController{
    async signUp(req, res){
        try{
            const { username, email, password } = req.body;
            if( !username || !email || !password){
                return req.status(400).json({error: "Bad Request!"})
            }
            const result = await new UserService.createUser({
                username: username,
                email: email,
                password: password,
            });
            if (result.error) {
                return res.status(400).json({ error: result.error });
            }
            res.status(201).json(result.user);
        }catch(error){
            console.error(error);
            res.status(500).json(error);
        }
    }
};
module.exports = new UserController();