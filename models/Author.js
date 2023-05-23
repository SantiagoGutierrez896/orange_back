import { Schema, model, Types } from 'mongoose'

const collection = 'authors'
const schema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: false }, //por default el required está en false
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date, required: false },
    photo: { type: String, required: true },
    user_id: { type: Types.ObjectId, ref: 'users', required: true },
    active: { type: Boolean, required: true },
},{
    timestamps: true
})

const Author = model(collection, schema)
export default Author