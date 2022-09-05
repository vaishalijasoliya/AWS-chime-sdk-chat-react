var express = require('express');
var router = express.Router();
const { Auth } = require( 'aws-amplify' );

router.get("/", function(req, res, next) {

    console.log('testing', Auth);

    // const userSignUp = async (username = 'vaishali', password = 'Vaishali@123') => {
    //     try {
    //       console.log('I m just debugging');
    //       await Auth.signUp({
    //         username,
    //         password,
    //         attributes: {
    //           // TODO: Utilize input field for email that way we can then have users self confirm after reg.
    //           email: 'jasoliyavaishali12@gmail.com',
    //           profile: 'none',
    //         },
    //       });
    //     //   notificationDispatch({
    //     //     type: 0,
    //     //     payload: {
    //     //       message:
    //     //         'Your registration information has been set to your administrator. Contact them for additional instructions.',
    //     //       severity: 'success',
    //     //     },
    //     //   });
    //     } catch (error) {
    //       console.log('error signing up:', error);
    //     //   notificationDispatch({
    //     //     type: 0,
    //     //     payload: {
    //     //       message: 'Registration failed.',
    //     //       severity: 'error',
    //     //     },
    //     //   });
    //     }
    //   };
    // await userSignUp('vaishali', 'Vaishali@123');
    res.send("API is working test");
});



module.exports = router;