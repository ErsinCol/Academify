import { insert } from "../services/courseServices.mjs"

const createCourse = (req, res)=>{
    insert(req.body)
        .then(createdCourse => {
            if(!createdCourse) return res.status(500).json({
                type: 'error',
                message: 'Not created course'
            })
            res.status(201).json({
                type: 'success',
                createdCourse
            })
        })
        .catch(err => {
            res.status(500).json({
                type:'error',
                message: 'Internal Server Error'
            })
        })
}

export default {
    createCourse
}