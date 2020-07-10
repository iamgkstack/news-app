const NewsAPI = require('newsapi');

module.exports = {
  fetchLatestNews: async (req, res) => {
    let defaultQuery = 'a';
    const sortBy = 'publishedAt';
    const country = 'gb';
    const { query } = req.query;

    if (query) defaultQuery = query;

    const { apiKey } = config;
    const newsApi = new NewsAPI(apiKey);

    try {
      const result = await newsApi.v2.topHeadlines({
        q: defaultQuery,
        country,
        sortBy,
      });
      return res.ok(result);
    } catch (e) {
      return res.serverError(e.message);
    }
  },
};
