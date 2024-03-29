import express from "express";
import YAML from "js-yaml";
import fs from "fs";
import swaggerUi from "swagger-ui-express";
import shiftApi from "./apis/shiftApi.mjs";
import facilityApi from "./apis/facilityApi.mjs";
import logger from "./utils/logger.js";

const swaggerDocument = YAML.load(
  fs.readFileSync("./apis/swagger.yaml", "utf8")
);
const app = express();
const port = 3000;

// set up middleware for parsing requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Define routes
app.use("/shifts", shiftApi);
app.use("/facilities", facilityApi);

// Log errors
app.use((err, req, res, next) => {
  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method}`
  );
  next(err);
});

app.listen(port, () => {
  logger.info(`Listening at http://localhost:${port}`);
});
