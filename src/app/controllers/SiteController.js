class SiteController {
    home(req, res, next) {
        res.render('home')
    }
    signin(req, res, next) {
        res.render('signin')
    }
    signup(req, res, next) {
        res.render('signup')
    }
    errorPage(req, res, next) {
        res.render('404Page')
    }
    
}

module.exports = new SiteController();
