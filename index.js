const express=require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser')
const keys=require('./config/keys');
require('./models/User')
require('./services/passport');

mongoose.connect(keys.mongoURI);


const app=express();
app.use(bodyParser.json())
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 *1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    // Express will serve up production assets
    // like our main.js file, or main.css file!

    app.use(express.static('client/build'));
    
    // app.use(express.static(path.join(__dirname, '/../client/build')));

    // Express will serve up the index.html file
    // if it doesn't recognize the route 
    const path = require('path');

    // app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client' ,'build', 'index.html'));
    // res.sendFile(path.join(__dirname + '/../client/build/index.html'));
    })
   
}

const PORT =process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log("App is running on port " + PORT);
});


// app.set( 'port', ( process.env.PORT || 5000 ));

// // Start node server
// app.listen( app.get( 'port' ), function() {
//   console.log( 'Node server is running on port ' + app.get( 'port' ));
//   });