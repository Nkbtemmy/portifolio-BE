import express  from "express";
import passport from "passport";
const session = require('express-session')
import {ensureAuth,ensureGuest} from './middlewares'

require('./auth')

// function isLoggedIn(req,res,next){
//     req.user ? next() : res.sendStatus(401);
// }

const app = express();
app.use(session({secret:'dats'}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/',ensureGuest,(req,res)=>{
    res.send(`<a href="/auth/google">Authenticate with google </a>`);
})

app.get('/google/callback',
    passport.authenticate('google',{
        successRedirect:'/protected',
        failureRedirect: '/auth/failure'
    })
)

app.get('/auth/failure',(req,res)=>res.send('Something went wrong...'))
app.get('/auth/google',
    passport.authenticate('google',{scope:['email','profile']})
)


app.get('/protected',ensureAuth,(req,res)=>{
    console.log("user:",req.user)
    res.send(`Hello !,${req.user.displayName}`);
})

app.get('/logout',(req,res)=>{
    req.logout();
    req.session.destroy();
    res.send('GoodBye')
})

app.listen(5000, ()=> console.log('listenig on:5000'))