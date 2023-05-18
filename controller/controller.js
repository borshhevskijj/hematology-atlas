import BloodCellModel from "../model/model.js";
import nodeCache from "node-cache";
const bloodCellModel = new BloodCellModel();
const cache = new nodeCache();

const queryProcessing = (modelMethod, requestParams, response) => {
  const cachedResult = cache.get(requestParams);
  if (cachedResult) {
    return response.status(200).json(cachedResult);
  }
  modelMethod(requestParams, (err, rows) => {
    if (err) {
      response.status(500).json("err" + err);
    } else if (rows && rows.length > 0) {
      console.log("nothing in cache");
      response.status(200).json(rows);
      cache.set(requestParams, rows, 3600);
    } else {
      response.status(404).json({
        error: "cell not found",
      });
    }
  });
};

const firstCharToUpperCase = (word) => {
  const lowerCaseWord = word.toLowerCase();
  return lowerCaseWord.slice(0, 1).toUpperCase().concat(lowerCaseWord.slice(1));
};

export const getBloodCellsByHemopoiesisHandler = (request, response) => {
  queryProcessing(
    bloodCellModel.getBloodCellsByHemopoiesis,
    request.params.type,
    response
  );
};

export const getBloodCellsByNameHandler = (request, response) => {
  queryProcessing(
    bloodCellModel.getBloodCellByName,
    firstCharToUpperCase(request.params.name),
    response
  );
};
