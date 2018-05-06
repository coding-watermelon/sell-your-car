process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const carFactory = require("./carFactory");
const { resources, disconnect } = require("../database");
const expect = chai.expect;

const server = require("../server");
let app;

chai.use(chaiHttp);

describe("Cars ", () => {
  let userId;

  before(done => {
    server.then(_app => {
      app = _app;
      done();
    });
  });

  after(done => {
    resources.cars.removeAll().then(() => done());
  });

  describe("GET /cars", () => {
    it("should return an empty list of cars", done => {
      const route = "/cars";

      chai
        .request(app)
        .get(route)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array").that.is.empty;
          done();
        });
    });

    it("should return a list of cars", done => {
      const route = "/cars";
      const cars = carFactory.cars(3);

      Promise.all(cars.map(car => resources.cars.create(car))).then(
        databaseCarItems => {
          console.log(databaseCarItems);
          chai
            .request(app)
            .get(route)
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body).to.be.an("array").that.is.not.empty;
              console.log(res.body);
              expect(res.body).to.deep.equal(cars);
              done();
            });
        }
      );
    });
  });
});
