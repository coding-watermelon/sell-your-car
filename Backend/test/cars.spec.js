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

  afterEach(done => {
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
          chai
            .request(app)
            .get(route)
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body).to.be.an("array").that.is.not.empty;
              for (var i = 0; i < databaseCarItems.length; i++) {
                expect(res.body).to.deep.include(databaseCarItems[i]);
              }
              expect(res.body).to.have.lengthOf(databaseCarItems.length);
              done();
            });
        }
      );
    });
  });

  describe("GET /cars/:id", () => {
    it("should return an object of the requested car", done => {
      const route = "/cars";
      const car = carFactory.cars(1);

      resources.cars.create(car).then(databaseCarItem => {
        chai
          .request(app)
          .get(`${route}/${databaseCarItem._id}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            expect(res.body).to.deep.equal(databaseCarItem);
            done();
          });
      });
    });

    it("should return status 418 for a non existing car", done => {
      const route = "/cars";
      const nonExistingId = "5aef28714dab94200e83a316";

      chai
        .request(app)
        .get(`${route}/${nonExistingId}`)
        .end((err, res) => {
          // If there is no car for this id, the car is obviously a teapot
          // Have mercy with me for this easteregg ;)
          expect(res).to.have.status(418);
          done();
        });
    });
  });

  describe("POST /cars", () => {
    it("should create an new Car and return it", done => {
      const route = "/cars";
      const car = carFactory.cars(1);

      chai
        .request(app)
        .post(route)
        .send(car)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.include.all.keys(
            "_id",
            "__v",
            "headline",
            "type",
            "description",
            "price"
          );

          // Get carItem from Database
          resources.cars.get(res.body._id).then(databaseCarItem => {
            expect(res.body).to.deep.equal(databaseCarItem);
            done();
          });
        });
    });

    it("should return status 501 for a wrong post body", done => {
      const route = "/cars";
      const car = carFactory.cars(1);
      car.price = "12345";
      delete car.headline;

      chai
        .request(app)
        .post(route)
        .send(car)
        .end((err, res) => {
          expect(res).to.have.status(501);
          done();
        });
    });
  });
});
