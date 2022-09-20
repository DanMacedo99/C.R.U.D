import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://usuario:123@library.dxoydsv.mongodb.net/node-library");

let db = mongoose.connection;

export default db;