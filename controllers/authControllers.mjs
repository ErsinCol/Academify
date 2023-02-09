import authService from "../services/authService.mjs"

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

export default {
    createUser
}