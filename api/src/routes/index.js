const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/' , (req,res) =>{
    res.status(200).send('Holaaa')
})

router.post('/addUser/:email' ,(req,res) => {
    const user = req.params.email
    var newUser = new User({
        email : user
    })
    newUser.save()
        .then(() => res.status(200).send('Usuario agregado'))
        .catch((err) => res.status(400).json({
            error: err,
            msg: 'Error al añadir el usuario'
        })) 
})

router.put('/addFav/:userEmail/:idMovie/:idImage/:idName', (req,res) => {
    const email = req.params.userEmail
    const movie = req.params.idMovie
    const image = '/' + req.params.idImage
    const name = req.params.idName

    User.findOne({email: email})
        .then(user => {user.favorites.push({idMovie : movie,
                                            image:image,
                                            name:name});
                       user.save();
                        res.status(200).send('Pelicula añadida a favoritos')})
        .catch(err =>res.status(400).json({
            error: err,
            msg:'Error al cargar la pelicula a favoritos'}))
    

})


router.get('/showMovies/:userEmail', (req,res) => {
    const email = req.params.userEmail
    User.findOne({email : email})
        .then(movies => res.status(200).json(movies.favorites))
        .catch(err => res.status(400).json({
            error: err,
            msg:'Error al cargar los ids de peliculas'
        }))
})

router.delete('/deleteFav/:userEmail/:idMovie', (req,res) => {
    const email = req.params.userEmail
    const idMovie = req.params.idMovie

    User.findOne({email : email})
            .then(user =>{
                     user.favorites = user.favorites.filter((fav) => fav.idMovie != idMovie)
                     user.save()
                     res.status(200).send('Pelicula borrada de favoritos')})
            .catch(err => res.status(400).json({
                error: err,
                msg:'Error al borrar la pelicula'
            }))
})

module.exports = router
