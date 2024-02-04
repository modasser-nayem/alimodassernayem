import mongoose from "mongoose";

const main = async () => {
   try {
      await mongoose
         .connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.p87lrd6.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
         )
         .then(() => {
            console.log(`DB IS CONNECT ON ${mongoose.connection.host}`);
         });
   } catch (error) {
      console.log(error);
   }
};

main();
