import { Schema, model } from 'mongoose'

const schemaNotes = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
}, {
    timestamps: true
});

export default model('Notes', schemaNotes);