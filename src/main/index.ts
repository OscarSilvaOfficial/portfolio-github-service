import express from "express";
import { GithubRoutes } from "./routes/github.routes";
import { register as RouterRegister } from 'express-decorators';


const app = express();

const githubRoutes = new GithubRoutes();
RouterRegister(app, githubRoutes);

app.listen(3000, () => console.log("Server is running on port 3000"));
