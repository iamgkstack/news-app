require('chai').should();

describe('find API', () => {
  it('should return top news from uk', async () => {
    const res = await request.get('/api/v1/news');

    res.statusCode.should.equal(200);
    res.body.should.be.an('object');
  });
});
