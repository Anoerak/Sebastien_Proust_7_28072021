const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'Setback_!&%Lunchroom_!&%Guide_!&%Twisting_!&%Gravity_!&%Lively');
        const userId = decodedToken.userId; 
        console.log(userId);
        console.log(req.body.userId);
        if(req.body.userId && req.body.userId != userId ){
            throw 'UserID non reconnu'; 
        }
        else {
            if(req.method == "GET") {
                req.body.userId = userId
            }
            next(); 
        }
    }
    catch (error) {
        console.log(error);
        console.log('Requête non autorisée');
    }
};