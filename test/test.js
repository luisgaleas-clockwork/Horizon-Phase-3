const chai = require('chai')
const expect = chai.expect
const chaiHTTP = require('chai-http')
const request = require('request')



const app = require("../horizon_server")

chai.use(chaiHTTP)
chai.should()

describe("Checking connection of enpoint /", () => {
    it('Connection', (done) => {
        chai.request(app).get("/")
            .end((error, res) => {
                res.should.have.status(200)
                done()
            })
    });
});

describe("Checking connection of enpoint /api/product", () => {
    it('Connection', (done) => {
        chai.request(app).get("/api/product")
            .end((error, res) => {
                res.should.have.status(200)
                done()
            })
    });
});

describe("Checking connection of enpoint /api/productfilter", () => {
    it('Connection', (done) => {
        chai.request(app).get("/api/productfilter")
            .end((error, res) => {
                res.should.have.status(200)
                done()
            })
    });
});

describe("Checking connection of enpoint /api/comment", () => {
    it('Connection', (done) => {
      chai.request(app).get("/api/comment")
      .end((error, res) => {
          res.should.have.status(200)
          done()
      })
        });
    });


// describe("Checking connection of enpoint /api/product", () => {
//     it('Connection', (done) => {
//         request('http://localhost:4000/api/product', (error, response, body) => {
//             expect(response.statusCode).to.equal(200);
//             done();
//         });
//     });
//     it('Json', (done) => {
//         request('http://localhost:4000/api/product', (error, response, body) => {
//             expect(response).to.be.an("object");
//             done();
//         });
//     });
// })

// describe("Checking connection of enpoint /api/productfilter?maxp=20", () => {
//     it('Connection', (done) => {
//         request('http://localhost:4000/api/productfilter?maxp=20', (error, response, body) => {
//             expect(response.statusCode).to.equal(200);
//             done();
//         });
//     });
//     it('Json', (done) => {
//         request('http://localhost:4000/api/productfilter?maxp=20', (error, response, body) => {
//             expect(response).to.be.an("object");
//             done();
//         });
//     });
// })

// describe("Checking connection of enpoint /api/productfilter?minp=0", () => {
//     it('Connection', (done) => {
//         request('http://localhost:4000/api/productfilter?minp=0', (error, response, body) => {
//             expect(response.statusCode).to.equal(200);
//             done();
//         });
//     });
//     it('Json', (done) => {
//         request('http://localhost:4000/api/productfilter?minp=0', (error, response, body) => {
//             expect(response).to.be.an("object");
//             done();
//         });
//     });
// })

// describe("Checking connection of enpoint /api/", () => {
//     it('Connection', (done) => {
//         request('http://localhost:4000/', (error, response, body) => {
//             expect(response.statusCode).to.equal(200);
//             done();
//         });
//     });
// })
