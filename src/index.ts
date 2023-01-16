import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createClient } from "./endpoints/createClient";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Conectado ao DB MySQL.");
});

app.get("/ping", ping)

// create client
app.post("/client", createClient)