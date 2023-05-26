import express from "express";
import cors from "cors";
import {
  getBloodCellsByNameHandler,
  getAllBloodCellsNamesHandler,
  // getBloodCellsByHemopoiesisHandler,
  // getImagesByHemopoiesisHandler,
  getImagesAndBloodCellsHandler,
} from "./controller/controller.js";

const app = express();
const PORT = 5000;
app.use(express.json(), cors({ origin: "*" }));

app.get("/hematopoiesis/:type", (request, response) => {
  // getBloodCellsByHemopoiesisHandler(request, response);
  // getImagesByHemopoiesisHandler(request, response);
  getImagesAndBloodCellsHandler(request, response);
});

app.get("/search/:name", (request, response) => {
  getBloodCellsByNameHandler(request, response);
});
app.get("/allCells", (request, response) => {
  getAllBloodCellsNamesHandler(request, response);
});

app.listen(PORT, () => console.log("SERVER STARTED ON 5000 PORT"));
