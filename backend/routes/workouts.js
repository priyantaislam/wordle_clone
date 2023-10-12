const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} = require('../Controllers/workoutController')

const router = express.Router()

//require auth for all workout routes
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/', getWorkouts)

router.get('/:id',getWorkout)

router.post('/',createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports = router