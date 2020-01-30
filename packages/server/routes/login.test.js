const request = require('supertest');
const host_url = 'http://localhost:3000'

describe('POST /login', function() {
  it('user login', function(done) {
    request(host_url)
      .post('/login')
      .send({
        email: 'ashish.kapoor@gmail.com',
        password: 'abc123'
      })
      .set('Accept', 'application/json')
      .expect((res) => {
        res.body.users.id = 1;
        res.body.users.email = 'ashish.kapoor@gmail.com';
        res.body.users.phone = '9899771880';
      })
      .expect(200, done);
  });
});