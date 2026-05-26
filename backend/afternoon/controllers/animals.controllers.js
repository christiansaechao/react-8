import {
  dbGetAnimal,
  dbGetSpecificAnimal,
  dbCreateAnimals,
  dbUpdateSpecificAnimal,
  dbDeleteAnimal,
} from "../services/animals.services.js";

// request data from database, returns all animals
export const getAnimals = async (req, res) => {
  const token = req.token;
  const { data, error } = await dbGetAnimal();

  console.log(data);
  // create your query to the database
  return res.send({ msg: "success", data: data });
};

export const getSpecificAnimal = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("No id");
  }

  try {
    const data = await dbGetSpecificAnimal(id);
    return res.send({ msg: "Successfully found animal", data });
  } catch (e) {
    return res.status(404).send(e);
  }
};

export const createAnimals = async (req, res) => {
  try {
    if (req.body) {
      const { data, error } = await dbCreateAnimals(req.body);
      return res.send({ msg: "Success", data });
    } else {
      return req.status(401).send("no body");
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

export const updateAnimals = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const updatedAnimal = await dbUpdateSpecificAnimal(id, newData);

  return res.send(updatedAnimal);
};

export const deleteAnimal = async (req, res) => {
  const { id } = req.params;

  if (!id) return;

  // falsey null value doesn't mean error

  try {
    const error = await dbDeleteAnimal(id);
    if (error) {
      return res.status(400).send("Some Error");
    }

    res.send({ message: "Successfully deleted animal" });
  } catch (e) {
    return res.status(400).send("Some Error");
  }
};
