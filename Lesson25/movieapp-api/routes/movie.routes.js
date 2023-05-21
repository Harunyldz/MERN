const express=require('express');
const router=express.Router();

const MovieModel=require('../models/Movie.Model');

//Get Movies
router.get('/', (req, res, next) => {
    const movies = MovieModel.find({});
    movies.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
}
);


//Add Movie
router.post('/', (req, res, next) => {

    const movie = new MovieModel(req.body);

    movie.save().then((data) => {
        res.json({ status: 'OK' ,
        data:data,
        message:'Movie added successfully'});
    }
    ).catch((err) => {
        res.json(err);
    }
    );
});




module.exports=router;