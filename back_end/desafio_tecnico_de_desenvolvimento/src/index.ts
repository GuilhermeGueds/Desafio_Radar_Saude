import express from "express";

import { personsRoutes } from "./routes/persons.routes";

import "./database"; 

const app = express();

app.use(express.json());

app.use("/person", personsRoutes);


export { app };
