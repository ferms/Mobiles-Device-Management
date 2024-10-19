// src/server.ts

import express from "express";
import dotenv from "dotenv";
import path  from "./routes/mobileRoutes";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(cors({
    origin: [
        "http://localhost:8080",
        "http://localhost:4200",
        "http://localhost:3000"
      ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
}));
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/Smartphones", path);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/api/v1/smartphones`);
});
