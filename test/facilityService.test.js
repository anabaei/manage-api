import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import sinon from "sinon";
import facilityService from "../services/facilityService.mjs";
import { sequelize } from "../models/index.js";
const {Facility } = sequelize.models;

const expect = chai.expect;
chai.use(chaiAsPromised);

describe("facilityService", function () {
  before(async function () {
    await sequelize.sync({ force: true }); // Sync the database schema before running the tests
  });

  describe("getActiveFacilities", function () {
    it("should return shifts grouped by date", async function () {
      // Set up test data
      const startDate = new Date("2022-01-01");
      const endDate = new Date("2022-01-03");
      const id = 1;
      const page = 1;
      const pageSize = 1;
      const activeFacilities = [
        {
          id: 1,
          Shifts: [
            {
              start: new Date("2022-01-01T08:00:00Z"),
              end: new Date("2022-01-01T16:00:00Z"),
            },
            {
              start: new Date("2022-01-02T08:00:00Z"),
              end: new Date("2022-01-02T16:00:00Z"),
            },
            {
              start: new Date("2022-01-03T08:00:00Z"),
              end: new Date("2022-01-03T16:00:00Z"),
            },
          ],
        },
      ];
      const expectedShiftsByDate = {
        "2022-01-01": [
          {
            start: new Date("2022-01-01T08:00:00Z"),
            end: new Date("2022-01-01T16:00:00Z"),
          },
        ],
        "2022-01-02": [
          {
            start: new Date("2022-01-02T08:00:00Z"),
            end: new Date("2022-01-02T16:00:00Z"),
          },
        ],
        "2022-01-03": [
          {
            start: new Date("2022-01-03T08:00:00Z"),
            end: new Date("2022-01-03T16:00:00Z"),
          },
        ],
      };

      // Stub the Sequelize models and functions
      sinon.stub(Facility, "findAll").returns(Promise.resolve(activeFacilities));

      // Call the method being tested
      const result = await facilityService.getActiveFacilities(
        startDate,
        endDate,
        id,
        page,
        pageSize
      );

      // Assert the result
      expect(result).to.deep.equal(expectedShiftsByDate);

      // Restore the stubs
      sinon.restore();
    });
  });
});
