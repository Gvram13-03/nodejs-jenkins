const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', () => {
    it('should return Hello, Jenkins CI/CD!', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.text).to.equal('Hello, Jenkins CI/CD!');
            done();
        });
    });
});