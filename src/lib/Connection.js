import mongoose from "mongoose";

const Connection = async () => {
  try {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) return;

    if (connectionState === 2) console.log("connecting");

    console.log("d", process.env.DATABASE_URI);

    await mongoose.connect('mongodb+srv://hit98987:ikOqFpn7kZQgGcy3@cluster0.2yci2.mongodb.net/coplycopsblogs');

    if (connectionState === 1) return console.log("Database Connected");
  } catch (error) {}
};

export default Connection;
