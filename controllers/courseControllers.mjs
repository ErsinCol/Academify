import { insert, list } from "../services/courseServices.mjs"

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
                message: err
            })
        })
}

const getAllCourse = (req, res)=>{
    list()
        .then(courses=>{
            if(!courses) return res.status(404).json({
                type: 'error',
                message: 'not found course'
            })
            res.status(200).render('courses',{
                page_name: 'courses',
                courses
            })
        })
        .catch(err=>{
            res.status(500).json({
                type:'error',
                message : err
            })
        })
}

export default {
    createCourse,
    getAllCourse
}