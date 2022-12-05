const Note = require('../models/dash_model')
const mongoose = require('mongoose')

// get all notes
const getNotes = async (req, res) => {
    const user_id = req.user._id
    try {
        const notes = await Note.find({user_id}).sort({ createdAt: -1 })
        res.status(200).send(notes)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

// get a single note
const getNote = async (req, res) => {
    const { id } = req.params
    // validate the mongodb object id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('Invalid id')
    }
    const note = await Note.findById(id)
    if(!note) {
        res.status(404).send({ message: 'note not found' })
    }
    res.status(200).send(note)
}

// post a new note
const postNote = async (req, res) => {
    const { title, body } = req.body
    let emptyFields = []
    if(!title) {
        emptyFields.push('title')
    }
    if(!body) {
        emptyFields.push('body')
    }
    if(emptyFields.length > 0) {
        return res.status(400).send({ error: `Please fill in all the fields`, emptyFields })
    }
    try {
        const user_id = req.user._id
        const note = await Note.create({ title, body, user_id})
        res.status(200).send(note)
    } catch (err) {
        res.status(400).send({error: err.message})
    }
}

// delete a note
const deleteNote = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('Invalid id')
    }
    const note = await Note.findOneAndDelete({_id:id})
    if(!note) {
        res.status(404).send({ message: 'Workout not found' })
    }
    // res.status(200).json({message: "Workout Deleted",workout})
    res.status(200).json(note)
}

// update a note
const updateNote = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('Invalid id')
    }
    const note = await Note.findByIdAndUpdate({_id:id}, {...req.body}, {new: true})
    if(!note) {
        res.status(404).send({ message: 'Note not found' })
    }
    // res.status(200).send({ message: 'Workout updated', workout })
    res.status(200).json(note)
}

module.exports = {
    postNote,
    getNotes,
    getNote,
    deleteNote,
    updateNote
}