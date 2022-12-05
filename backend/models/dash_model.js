const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DashSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Note', DashSchema);