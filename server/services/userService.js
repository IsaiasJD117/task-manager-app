const bcrypt = require("bcrypt")
const User = require("../schemas/user");
class UserService{

    async getUserById(userId){

        try{
            return await User.findById(userId);
        }catch(error){
            return error;
        }
    }

    async getUserByEmail(email){

        try{
            return await User.findOne(email);
        }catch(error){
            return error;
        }
    }

    async createUser({username, email, password}){
        try{
            let existingUser = await User.findOne({email});
            if(existingUser){
                throw new Error("User Already exists!"); 
            }
            const hashedPassword = await bcrypt.hash(password, 8)
            const newUser = new User({
                username: username,
                email: email,
                password: hashedPassword,
            });
            const newSavedUser = await newUser.save();
            return {user: { _id: newSavedUser._id, username: newSavedUser.username, email: newSavedUser.email}};
        }catch(error){
            console.error(error);
            return error;
        }
    }
    
    async authUser({email, password}){
        try{
            const user = await User.findOne({email});
            if(!user){
                throw new Error("User Not Found!");
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if(!isPasswordValid){
                throw new Error("Invalid Email or Password!");
            }
            return {user: {_id: user.id, username: user.username, email: user.email}}
        }catch(error){
            return error;
        }
    }
};

module.exports = new UserService();