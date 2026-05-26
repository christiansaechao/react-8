// @ts-ignore: missing declaration file for JS module
import { pgPool } from "../utils/pgClicent.js";

// database => fetch to get all the movies from the database
export const getAllMovies = async () => {
    // sql => database query
  const result = await pgPool.query(`SELECT * FROM movies`);
  return result;
};

export const getMovieById = async (movieId:string) => {
  const findResult = await pgPool.query("SELECT * FROM movies WHERE id = $1", [
    movieId,
  ]);

  return findResult;
};

export const updateMovieById = async (values: any) => {
  const queryText =
    "UPDATE movies SET title = $1, year = $2, description = $3 WHERE id = $4 RETURNING *";
  const finalResult = await pgPool.query(queryText, values);
};

export const createMovieServices = async (
  title: string,
  year: number,
  description: string,
) => {
  const text =
    "INSERT INTO movies (title, year, description) VALUES ($1, $2, $3)";
  const values = [title, year, description];
  await pgPool.query(text, values);
};

export const deleteMovieService = async (movieId: any) => {
  const text = "DELETE FROM MOVIES WHERE id = $1";
  const value = [movieId];
  await pgPool.query(text, value);
};

// const result = request to database => returns rows from movies
