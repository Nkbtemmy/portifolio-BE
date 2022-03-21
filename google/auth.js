const passport = require('passport')
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const  GOOGLE_CLIENT_ID ="700217911646-saqfd1ag36o70mbtlbovfmsed04sm4v6.apps.googleusercontent.com";
const  GOOGLE_CLIENT_SECRET= "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";
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    const newUser = {
      googleId: profile.id,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      email: profile.emails[0].value,
      username: profile.emails[0].value,
      avatar: profile.photos[0].value,
      lang: profile.language,
    }
    try {
      let user = await User.findOne({email:newUser.email})
      if(user){
        done(null,user)
      }else{
        user = await User.create(newUser)
        done(null,user) 
      }
    } catch (error) {
      console.log(error.message)
    }
    //return done(null, profile);
  }
));
passport.serializeUser((user,done)=>done(null,user));
passport.deserializeUser((user,done)=>done(null,user))