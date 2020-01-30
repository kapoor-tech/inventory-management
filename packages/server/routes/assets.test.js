const request = require('supertest');
const host_url = 'http://localhost:3000'

const assetMock = {
    "id": 2,
    "name": "Banner-1",
    "dimensions": "10x12",
    "location": "1st floor",
    "status": true,
    "shoppingCenterId": 1,
    "createdAt": "2020-01-20T23:25:42.137Z",
    "updatedAt": "2020-01-22T12:21:14.356Z"
}

describe('GET /assets/:id', function() {
  it('/assets/:id', function(done) {
    request(host_url)
      .get('/assets/2')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc5NTUyMDM2fQ.K__qbYHAXCels2tbpyrcPNAKdhubvfvTRjLQGUAs3N0')
      .expect((res) => {
        res.body.asset = assetMock;
      })
      .expect(200, done);
  });
});