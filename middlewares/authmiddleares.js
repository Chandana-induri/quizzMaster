const jwt = require('jsonwebtoken');

exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'secret', (err, decodedToken) => {
            if (err) {
                res.redirect('/auth/login');
            } else {
                req.user = decodedToken;
                next();
            }
        });
    } else {
        res.redirect('/auth/login');
    }
};
