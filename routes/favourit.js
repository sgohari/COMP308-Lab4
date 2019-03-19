let express = require('express');
let router = express.Router();
//for using mongo
let mongoose = require('mongoose');

//reference to the db schema
let myFavourit = require('../models/favourits');

/** GET myFavourit list page -READ operations */
router.get('/', (req, res, next)=>{
    myFavourit.find((err, favouriteList)=>{

        if(err){
            return console.error(err);
        }
        else{
           //console.log(favouriteList);
            res.render('favourit/index', {
                title: 'Favourit List',
                favouriteList: favouriteList
            });
        }
    });
});

// GET route for the 

router.get('/add',(req, res, next)=>{

    res.render('/favourit/add', {
        title: 'Add new Favourites'
    });

});

/*Post Route */
router.post('/add',(req, res, next)=>{

    let newFavourites = myFavouritSchema({
        "firstName": req.body.firstName,
        "lastName": req.body.lasttName,
        "age": req.body.age,
    });
    myFavouritSchema.create(newFavourites, (err, myFavouritSchema)=>{

        if(err){
        res.end(error)
        }else{
            res.redirect('/favourit/favourit-List');
        }
    });
});


module.exports = router;