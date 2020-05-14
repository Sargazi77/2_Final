let express = require('express')
let db = require('../models')
let Sequelize = require('sequelize')
let Note = db.Note

let router = express.Router()

router.get('/notes', function(req, res, next){
    Note.findAll( {order:['Date']}).then( notes => {
        return res.json(notes)
    })
})        
router.post('/notes', function(req, res, next){
    Note.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    })
})

router.patch('/notes/:id', function(req, res, next){    
    Note.update(req.body, { where: {id: req.params.id}})   
    .then(rowModified => {
        return res.send('ok')
    }).catch(err =>{
        if (err instanceof Sequelize.ValidationError){
            let message= err.errors.map (e=> e.message)
            return res.status(400).json(message) 
        }
        return next(err)
    })    
})

router.delete('/notes/:id', function(req, res, next){
    Note.destroy( {where: {id: req.params.id} } )
    .then( rowModified => {
        return res.send('ok')
    }).catch (err => next(err) )
})        

module.exports = router

