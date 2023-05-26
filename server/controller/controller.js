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

export const getBloodCellsByHemopoiesisHandler = (request) => {
  return new Promise((resolve, reject) => {
    bloodCellModel.getBloodCellsByHemopoiesis(
      request.params.type,
      (err, rows) => {
        if (err) {
          return reject(err);
        } else if (rows && rows.length > 0) {
          return resolve(rows);
        } else {
          reject({
            error: "cell not found",
          });
        }
      }
    );
  });
};

export const getImagesByHemopoiesisHandler = (request) => {
  return new Promise((resolve, reject) => {
    bloodCellModel.getImagesByHemopoiesis(request.params.type, (err, rows) => {
      if (err) {
        reject(err);
      } else if (rows && rows.length > 0) {
        return resolve(rows);
      } else {
        reject({
          error: "cell not found",
        });
      }
    });
  });
};

export const getImagesAndBloodCellsHandler = async (request, response) => {
  try {
    // const data = Promise.all([
    //   getImagesByHemopoiesisHandler(request),
    //   getBloodCellsByHemopoiesisHandler(request),
    // ]);
    const cachedResult = cache.get(request.params.type);
    if (cachedResult) {
      console.log(`in cache ${cachedResult}`);
      response.status(200).json(cachedResult);
    }
    const images = await getImagesByHemopoiesisHandler(request);
    const bloodCellDescription = await getBloodCellsByHemopoiesisHandler(
      request
    );

    const result = [images, bloodCellDescription];
    response.status(200).json(result);
    cache.set(request.params.type, result, 3600);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const getBloodCellsByNameHandler = (request, response) => {
  queryProcessing(
    bloodCellModel.getBloodCellByName,
    firstCharToUpperCase(request.params.name),
    response
  );
};

export const getAllBloodCellsNamesHandler = (request, response) => {
  bloodCellModel.getAllBloodCellsNames((err, rows) => {
    if (err) {
      response.status(500).json("err" + err);
    } else if (rows && rows.length > 0) {
      response.status(200).json(rows);
    } else {
      response.status(404).json({
        error: "cell not found",
      });
    }
  });
};
