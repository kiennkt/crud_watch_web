const newsRouter = require('./news');
const loginRouter = require('./login');
const MenWatchRouter = require('./MenWatch');
const meRouter = require('./me');
const homeRouter = require('./home');
const homeUserRouter = require('./User/home');
var cookieParser = require('cookie-parser');

function route(app) {
    app.use(cookieParser());

    app.use(
        '/admin/news',
        (req, res, next) => {
            if (req.cookies['auth'] == undefined) {
                res.redirect('/login');
            }
            next();
        },
        newsRouter,
    );

    app.use(
        '/admin/MenWatch',
        (req, res, next) => {
            if (req.cookies['auth'] == undefined) {
                res.redirect('/login');
            }
            next();
        },
        MenWatchRouter,
    );

    app.use(
        '/admin/me',
        (req, res, next) => {
            if (req.cookies['auth'] == undefined) {
                res.redirect('/login');
            }
            next();
        },
        meRouter,
    );

    app.use('/login', loginRouter);

    app.use(
        '/admin',
        (req, res, next) => {
            if (req.cookies['auth'] == undefined) {
                res.redirect('/login');
            }
            next();
        },
        homeRouter,
    );

    app.use('/', homeUserRouter);
}

module.exports = route;
