import mongoose from 'mongoose'

const Schema = mongoose.Schema

const SkelbimoSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    about: {
        type:String,
        required:true
    },
    category: {
        type:[String],
        required:true
    },
    price: {
        type:Number,
        required:true
    }
})

const Ad = mongoose.model('Ad', SkelbimoSchema)
export default Ad