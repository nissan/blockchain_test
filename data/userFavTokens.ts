import mongoose from "mongoose";

export const userFavTokensSchema = new mongoose.Schema({
    userId: 
    {
        type: String,
        required: true,
        unique: true
    },
    favTokenIds: {
        type: [Number],
        default:[]
    }
  });

   // Create a model from the schema
export const UserFavTokens = mongoose.model('UserFavTokens', userFavTokensSchema);