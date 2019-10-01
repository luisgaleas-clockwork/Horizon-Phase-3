const expect = require('chai').expect
const request = require('request')

describe("Checking connection of enpoint /api/product", () => {
    it('Connection', (done) => {
        request('http://localhost:4000/api/product', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('Json', (done) => {
        request('http://localhost:4000/api/product', (error, response, body) => {
            expect(response).to.be.an("object");
            done();
        });
    });
})

describe("Checking connection of enpoint /api/productfilter?maxp=20", () => {
    it('Connection', (done) => {
        request('http://localhost:4000/api/productfilter?maxp=20', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('Json', (done) => {
        request('http://localhost:4000/api/productfilter?maxp=20', (error, response, body) => {
            expect(response).to.be.an("object");
            done();
        });
    });
})

describe("Checking connection of enpoint /api/productfilter?minp=0", () => {
    it('Connection', (done) => {
        request('http://localhost:4000/api/productfilter?minp=0', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('Json', (done) => {
        request('http://localhost:4000/api/productfilter?minp=0', (error, response, body) => {
            expect(response).to.be.an("object");
            done();
        });
    });
})
