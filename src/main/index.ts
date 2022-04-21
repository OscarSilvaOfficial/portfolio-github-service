import express from "express";
import { githubRoutes } from "./routes/github.routes";

const app = express();

githubRoutes(app);

app.listen(3000, () => console.log("Server is running on port 3000"));
