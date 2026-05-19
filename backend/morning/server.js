import express from "express";

const app = express();

const games = {

}

const movies = [
    {
        id: 1,
        title: "back to the future"
    },
    {
        id: 2,
        title: "Spiderman"
    }
]

const users = {

}

app.get("/", (req, res) => {
  res.send({ msg: "This is the backend" });
});



// localhost:3000/movies/1

app.get("/movies/:id", (req, res) => {
    const id = req.params.id; // 1
});

/**
 * 4 Total Endpoints\
 * Sending back an object of whatever endpoint
 * 1. attach status codes to the response and do some error hanlding
 * Users 
 * Movies by id
 * Query games by genre
 */

app.listen(3000, () => console.log("Server running on port: " + 3000));
