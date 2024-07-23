import mongoose from "mongoose";

export type userType = {
  _id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

const userSchema = new mongoose.Schema({
  email: { type: String, requited: true, unique:true},
});
