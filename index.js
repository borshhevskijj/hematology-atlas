import express from "express";
import cors from "cors";
import {
  getBloodCellsByHemopoiesisHandler,
  getBloodCellsByNameHandler,
} from "./controller/controller.js";
const app = express();
const PORT = 5000;
app.use(express.json(), cors({ origin: "*" }));

app.get("/hematopoiesis/:type", (request, response) => {
  getBloodCellsByHemopoiesisHandler(request, response);
});

app.get("/search/:name", (request, response) => {
  getBloodCellsByNameHandler(request, response);
});

app.listen(PORT, () => console.log("SERVER STARTED ON 5000 PORT"));
