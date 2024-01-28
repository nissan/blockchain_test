import mongoose from "mongoose";
export const MONGO_DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/?retryWrites=true&w=majority`;
export const connect = (async () => await mongoose.connect(MONGO_DB_URI));
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