import type { Request, Response } from "express";
import * as Services from "../services/MovieServices";
import { getAllMovies } from "../services/MovieServices";

export const allMovies = async (request: Request, response: Response) => {
  try {
    // how to make a sql query to select all movies
    const movies = await getAllMovies();
    return response.json({ success: true, data: movies });
  } catch (err: any) {
    return response.status(500).json({ success: false, msg: err.message });
  }
};

export const MovieUpdate = async (req: Request, res: Response) => {
  const movieId = req.params.id as string;
  const updates = req.body;
  try {
    const findResult = await Services.getMovieById(movieId);
    console.log(findResult);
    if (findResult.rows.length === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }

    const movie = findResult.rows[0];

    // ?? nullish coalescing
    const updatedMovie = {
      title: updates.title ?? movie.title,
      year: updates.year ?? movie.year,
      description: updates.description ?? movie.description,
    };

    const finalValues = [
      updatedMovie.title,
      updatedMovie.year,
      updatedMovie.description,
      movieId,
    ];
    const finalResult: any = await Services.updateMovieById(finalValues);

    res.status(200).json(finalResult.rows[0]);
  } catch (error: any) {
    throw new Error(error);
  }
};

//  export const oneMovie = async ( req: Request , res: Response) => {
//     try  {
//         const movie = await Services.getMovieById(req.params.id);
//         res.json({ success:true, data: movie})
//     }
//     catch(err: any){
//         res.status(404).json({ success: false, msg: err.message});
//     }
//  }

export const createMovie = async (req: Request, res: Response) => {
  try {
    const { title, year, description } = req.body;
    await Services.createMovieServices(title, year, description);
    res.status(201).json({ success: true, movie: "created" });
  } catch (err: any) {
    throw new Error(err);
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    await Services.deleteMovieService(req.params.id);
    res.status(202).json({ success: true, movie: "deleted" });
  } catch (err: any) {
    throw new Error(err);
  }
};
