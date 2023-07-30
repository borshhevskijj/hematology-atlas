import BloodCellModel from "../model/model.js";
import nodeCache from "node-cache";
const bloodCellModel = new BloodCellModel();
const cache = new nodeCache();

export const firstCharToUpperCase = (word) => {
  const lowerCaseWord = word.toLowerCase();
  return lowerCaseWord.slice(0, 1).toUpperCase().concat(lowerCaseWord.slice(1));
};

const filterData = (data) => {
  console.log(data);
  const [images, description] = data;
  // const sortedDescription = description.sort((a,b)=>a.id - b.id)
  const results = [];
  description.map((bloodCell) => {
    const img = images.filter((image) => image.bloodCell_id === bloodCell.id).map((image) => image.image);
    results.push({
      ...bloodCell,
      img,
    });
  });
  return results;
};

export const getBloodCellsDescriptionByHemopoiesisHandler = (request) => {
  console.log("qwe");
  return new Promise((resolve, reject) => {
    bloodCellModel.getBloodCellsDescriptionByHemopoiesis(request.params.type, (err, rows) => {
      if (err) {
        reject(err);
      } else if (rows && rows.length > 0) {
        resolve(rows);
      } else {
        reject({
          error: "cell not found",
        });
      }
    });
  });
};

export const getBloodCellsDescriptionByNameHandler = (request) => {
  console.log("qwe");
  return new Promise((resolve, reject) => {
    bloodCellModel.getBloodCellDescriptionByName(firstCharToUpperCase(request.params.name), (err, rows) => {
      console.log(rows);
      if (err) {
        reject(err);
      } else if (rows && rows.length > 0) {
        resolve(rows);
      } else {
        reject({
          error: "cell not found",
        });
      }
    });
  });
};

// const getImagesByHemopoiesisHandler = (request) => {
//   return new Promise((resolve, reject) => {
//     bloodCellModel.getImagesByHemopoiesis(request.params.type, (err, rows) => {
//       if (err) {
//         reject(err);
//       } else if (rows && rows.length > 0) {
//         resolve(rows);
//       } else {
//         reject({
//           error: "cell not found",
//         });
//       }
//     });
//   });
// };

const getImagesHandler = (modelMethod, requestParams) => {
  console.log("qwe");
  return new Promise((resolve, reject) => {
    modelMethod(requestParams, (err, rows) => {
      if (err) {
        reject(err);
      } else if (rows && rows.length > 0) {
        resolve(rows);
      } else {
        reject({
          error: "cell not found",
        });
      }
    });
  });
};

export const getBloodCellsByHematopoiesisHandler = async (request, response) => {
  console.log("qwe");
  console.log("qwe");
  try {
    const cachedResult = cache.get(request.params.type);
    if (cachedResult) {
      response.status(200).json(cachedResult);
      return;
    }
    const images = await getImagesHandler(bloodCellModel.getImagesByHemopoiesis, request.params.type);
    const bloodCellDescription = await getBloodCellsDescriptionByHemopoiesisHandler(request);

    const result = filterData([images, bloodCellDescription]);
    response.status(200).json(result);
    cache.set(request.params.type, result, 3600);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const getBloodCellsByNameHandler = async (request, response) => {
  console.log("qwe");
  console.log("qwe");
  const requestPramsName = firstCharToUpperCase(request.params.name);
  try {
    const cachedResult = cache.get(requestPramsName);
    if (cachedResult) {
      response.status(200).json(cachedResult);
      return;
    }
    const images = await getImagesHandler(bloodCellModel.getImagesByName, requestPramsName);
    const bloodCellDescription = await getBloodCellsDescriptionByNameHandler(request);
    const result = filterData([images, bloodCellDescription]);

    response.status(200).json(...result);
    cache.set(requestPramsName, ...result, 3600);
  } catch (error) {
    response.status(404).json({ error: "клетка не найдена!" });
  }
};

export const getAllBloodCellsNamesHandler = (request, response) => {
  console.log("qwe");
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
