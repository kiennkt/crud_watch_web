const newsRouter = require('./news');
const siteRouter = require('./site');
const MenWatchRouter = require('./MenWatch');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/MenWatch', MenWatchRouter);
    app.use('/', siteRouter);
}

module.exports = route;
