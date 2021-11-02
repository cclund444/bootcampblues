// checks to see if an user is logged in
const autorization = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login')
    } else {
        next();
    }
};

module.exports = autorization;