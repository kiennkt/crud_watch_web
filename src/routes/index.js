const newsRouter = require('./news');
const siteRouter = require('./site');
const MenWatchRouter = require('./MenWatch');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/MenWatch', MenWatchRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;
