class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('news');
  }

  //[GET] /news/:slug
  show(req, res) {
    res.send('NEWS DETAIL!!!');
  }
}

module.exports = new NewsController(); // tạo 1 đối tượng và export ra ngoài
// export cái gì sẽ nhận được cái đó khi require
