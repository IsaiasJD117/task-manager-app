const UserService = require('../services/userService');
class UserController{
    async signUp(req, res){
        try{
            const { username, email, password } = req.body;
            if( !username || !email || !password){
                return req.status(400).json({error: "Bad Request!"})
            }
            const result = await UserService.createUser({
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

    async getById(req, res){
        try{
            const {userId} = req.body;
            const user = await UserService.getUserById(userId);
            res.status(201).json(user);
        }catch(error){
            return res.status(500).json(error)
        }
    }

    async getByEmail(req, res){
        try{
            const {email} = req.body;
            const user = await UserService.getByEmail(email);
            res.status(201).json(user);
        }catch(error){
            return res.status(500).json(error)
        }
    }

    async logIn(req,res){
        try{
            const { email, password} = req.body;
            if(!email || !password){
                return res.status(400).json({error: "Bad Request!"});
            }
            const result = await UserService.authUser({email, password});
            if(result instanceof Error){
                return res.status(401).json({error: result.message});
            }
            return res.status(200).json(result.user);
        }catch(error){
            return res.status(500).json({error: "Internal Server Error!"});
        }
    }
};
module.exports = new UserController();