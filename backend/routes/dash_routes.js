const express = require('express')
const { postNote, getNotes, getNote, deleteNote, updateNote } = require('../controllers/dash_controllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// authentication before accessing the workout routes
router.use(requireAuth)

// get all workouts
router.get('/', getNotes)

// get a single workout
router.get('/:id', getNote)

// post a new workout
router.post('/', postNote)

// delete a workout
router.delete('/:id', deleteNote)

// update a workout
router.patch('/:id', updateNote)

module.exports = router 