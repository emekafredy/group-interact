import request from 'supertest';
import app from '../../../../app';


describe('Index api', () => {
  describe('/', () => {
    it('shows the root url', (done) => {
      request(app)
        .get('/')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          const { message } = res.body;
          expect(res.status).toEqual(200);
          expect(message).toEqual('GROUP-INTERACTIVE');
          if (err) return done(err);
          done();
        });
    });

    it('shows V1 api welcome message', (done) => {
      request(app)
        .get('/api/v1')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          const { message } = res.body;
          expect(res.status).toEqual(200);
          expect(message).toEqual('Welcome to Group Interact app API, Version 1');
          if (err) return done(err);
          done();
        });
    });

    it('should return 404 error for incorrect url', (done) => {
      request(app)
        .get('/api/v1/use')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          const { error } = res.body;
          // expect(success).toEqual(false);
          expect(error).toEqual('Oops! This route does not exist');
          if (err) return done(err);
          done();
        });
    });
  });
});
