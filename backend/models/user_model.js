const bcrypt = require('bcrypt')
const validator = require('validator')
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

// static signup method
userSchema.statics.signup = async function (username, email, password) {
    try {
        // validation
        if(!email || !password || !username) {
            throw new Error('All fields must be filled')
        }
        // validate email
        if (!validator.isEmail(email)) {
            throw new Error('Email is invalid')
        }
        // validate password
        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters')
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        // check if user exists
        const usere = await this.findOne({email})
        const useru = await this.findOne({username})
        if (usere) {
            throw new Error('Email already in use')
        }
        if (useru) {
            throw new Error('User already exists')
        }

        // create new user
        const newUser = await this.create({ username, email, password: hashedPassword })
        return newUser
    } catch (err) {
        throw err
    }
}

// static login method
userSchema.statics.login = async function (username, password) {
    try {
        // validation
        if(!username || !password) {
            throw new Error('All fields must be filled')
        }
        // check if user exists
        const user = await this.findOne({username})
        if (!user) {
            throw new Error('User does not exist')
        }
        // check if password is correct
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            throw new Error('Password is incorrect')
        }
        return user
    } catch (err) {
        throw err
    }
}

module.exports = mongoose.model('User', userSchema);