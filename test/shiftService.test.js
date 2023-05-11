import { expect } from "chai";
import sinon from "sinon";
import shiftService from "../services/shiftService.mjs";
import { sequelize } from "../models/index.js";
const { Facility } = sequelize.models;

describe("shiftService", function () {
  describe("getAllShiftsNotFromFacility", function () {
    it("should return expected result", async function () {
      // Arrange
      const startDate = new Date("2022-01-01");
      const endDate = new Date("2022-01-31");
      const id = 1;
      const page = 1;
      const pageSize = 10;

      const findAllStub = sinon.stub();
      findAllStub.resolves([
        {
          name: "Facility1",
          Shifts: [
            {
              profession: "Doctor",
              start: new Date("2022-01-02"),
              end: new Date("2022-01-02T00:00:00Z"),
            },
            {
              profession: "Nurse",
              start: new Date("2022-01-03"),
              end: new Date("2022-01-03T00:00:00Z"),
            },
          ],
        },
        {
          name: "Facility2",
          Shifts: [
            {
              profession: "Doctor",
              start: new Date("2022-01-01"),
              end: new Date("2022-01-01T00:00:00Z"),
            },
            {
              profession: "Nurse",
              start: new Date("2022-01-05"),
              end: new Date("2022-01-05T00:00:00Z"),
            },
          ],
        },
      ]);

      sinon.replace(Facility, "findAll", findAllStub);

      // Act
      const result = await shiftService.getAllShiftsNotFromFacility(
        startDate,
        endDate,
        id,
        page,
        pageSize
      );

      // Assert
      expect(result).to.deep.equal({
        name: "Facility1",
        "2022-01-01": [
          {
            end: new Date("2022-01-01"),
            profession: "Doctor",
            start: new Date("2022-01-01T00:00:00.000Z"),
          },
        ],
        "2022-01-02": [
          {
            end: new Date("2022-01-02"),
            profession: "Doctor",
            start: new Date("2022-01-02T00:00:00.000Z"),
          },
        ],
        "2022-01-03": [
          {
            end: new Date("2022-01-03"),
            profession: "Nurse",
            start: new Date("2022-01-03T00:00:00.000Z"),
          },
        ],
        "2022-01-05": [
          {
            end: new Date("2022-01-05"),
            profession: "Nurse",
            start: new Date("2022-01-05T00:00:00.000Z"),
          },
        ],
      });

      sinon.restore();
    });
  });
});
