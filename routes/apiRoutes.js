const app = require("express").Router();
const workout = require("../models/workouts.js")

// New Workout
app.post("/api/workouts", ({ body }, res) => {
    console.log("Creating a new workout");
    workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Completed Workout
app.get("/api/workouts", (req, res) => {
    console.log("Completed workout");
    workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// New Exercise
app.put("/api/workouts/:id", (req, res) => {
    console.log("Add a new exercise");
    workout.findByIdAndUpdate(
        req.params.id,
        { $push: {exercises: req.body}},
        {new: true}
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Charts
app.get("/api/workouts/range", (req, res) => {
    workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = app;