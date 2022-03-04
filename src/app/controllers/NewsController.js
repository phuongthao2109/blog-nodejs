class NewsController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('detail news');
    }
}

module.exports = new NewsController();
