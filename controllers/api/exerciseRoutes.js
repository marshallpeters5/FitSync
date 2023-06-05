const express = require("express");
const router = express.Router();
const { Exercise } = require('../../models');
const { Op } = require('sequelize');

// Middleware for authorization check
const checkAuthorization = async (req, res, next) => {
    try {
      if (req.session.user && req.session.user.is_admin) {
        next();
      } else {
        const exerciseId = req.params.id;
        const userId = req.session.user && req.session.user.id;
        const exercise = await Exercise.findOne({ where: { id: exerciseId, user_id: userId } });
        if (exercise) {
          req.exercise = exercise;
          next();
        } else {
          res.status(403).json({ error: 'Unauthorized' });
        }
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to check authorization' });
    }
  };
  
// Get all exercises
// router.get('/', async (req, res) => {
//   try {
//     const exercises = await Exercise.findAll({
//       order: [['createdAt', 'DESC']],
//       limit: 5,
//     });
//     res.render('homepage', { exercises });
    
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to fetch exercises' });
//   }
// });

router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.findAll();
    res.status(200).json(exercises);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch exercises' });
  }
});

// Get a specific exercise by ID. //
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await Exercise.findByPk(id);
    if (!exercise) {
      return res.status(404).json({ error: "Exercise not found" });
    }
    res.json(exercise);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the exercise" });
  }
});

// Search exercises by name of the exercise. //
router.get("/search", async (req, res) => {
  try {
    const { name } = req.query;
    // Case-insensitive search for exercises that match the name.
    const exercises = await Exercise.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    res.json(exercises);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to search for exercises" });
  }
});

// Create a new exercise. //
router.post("/", async (req, res) => {
  try {
    const existingExercise = await Exercise.findOne({ where: { name } });
    if (existingExercise) {
      return res.status(400).json({ error: "This exercise already exists" });
    }
    const { name, description, category, difficulty } = req.body;
    const userId = req.session.user && req.session.user.id;
    const exercise = await Exercise.create({
      name,
      description,
      category,
      difficulty,
      author: userId,
    });
    // Check if an exercise with the same name already exists
    res.status(201).json(exercise);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create the exercise" });
  }
});

// Update an existing exercise. //
router.put("/:name", checkAuthorization, async (req, res) => {
  try {
    const { name } = req.params;
    const exercise = req.exercise;

    if (!exercise) {
      return res.status(404).json({ error: "Exercise not found" });
    }
    const { description, category, difficulty } = req.body;
    exercise.description = description;
    exercise.category = category;
    exercise.difficulty = difficulty;
    await exercise.save();
    res.json(exercise);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update the exercise" });
  }
});

// Delete an existing exercise
router.delete("/:id", checkAuthorization, async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = req.exercise;
    if (!exercise) {
      return res.status(404).json({ error: "Exercise not found" });
    }
    await exercise.destroy();
    res.json({ message: "Exercise deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete the exercise" });
  }
});

module.exports = router;