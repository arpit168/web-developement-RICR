import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import AuthRouter from "./src/routes/authrouter.js";
import UserRouter from "./src/routes/userRouter.js";
import { connect  } from "mongoose";

const app = express();

app.use(cors())
app.use(express.json());
app,use(morgan("dev"));
app.use("/auth", AuthRouter);
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Serever Connected" });
});

// if(!process.env.port){
//   Port = 5000;
// }else{port = process.env.PORT;
// 
// }

const port = process.env.PORT || 5000


app.listen(5000, () => {
  console.log("Server Started at port", port);
  ConnectDB();
});
