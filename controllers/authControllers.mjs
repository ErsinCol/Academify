import authService from "../services/authService.mjs"
import bcrypt from 'bcrypt'
const createUser = (req, res)=>{
    authService.insert(req.body)
        .then(user=>{
            if(!user) return res.status(500).json({type:'error',message:'fail create user'})
            res.status(201).json({type:'success',user})
        })
        .catch(err=>{
            res.status(500).json({type:'error',message:err})
        })
}

const loginUser = async (req, res)=>{
    const {email, password} = req.body
    await authService.findWhere({email})
        .then(user=>{
            if(!user) return res.status(404).json({ type:'error', message:'not found user'})
            bcrypt.compare(password, user.password, (err, same)=>{
                if(same) return res.status(200).json({ type:'success', message: 'you are logged in'})
                return res.status(401).json({ type:'error', message: 'not correct password'})
            })
        })
        .catch(err=>{
            res.status(500).json({type:'error',message:err})
        })
}

export default {
    createUser,
    loginUser
}