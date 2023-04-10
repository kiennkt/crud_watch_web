const newsRouter = require('./news');
const siteRouter = require('./site');


function route(app){
    // console.log('PATH: ', path.join(__dirname, 'resources/views'))
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });
    app.use('/news', newsRouter);
    
    app.use('/', siteRouter);
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
    
    // app.post('/search', (req, res) => {
    //     // console.log(req.body)
    //     res.render('search');
    // });
}

module.exports = route;