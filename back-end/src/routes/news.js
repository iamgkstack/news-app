const NewsController = require('../controllers/NewsController');

module.exports = [
  {
    version: 'v1',
    path: 'news',
    method: 'get',
    action: NewsController.fetchLatestNews,
  },
];
