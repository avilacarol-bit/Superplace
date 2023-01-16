import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createClient } from "./endpoints/createClient";
import { getAllClients } from "./endpoints/allClients";
import { getAllProducts } from "./endpoints/allProducts";
import { createOrder } from "./endpoints/createOrder";
import { getStock } from "./endpoints/stock";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Conectado ao DB MySQL.");
});

app.get("/ping", ping);

// create client
app.post("/client", createClient);

// get clients
app.get("/clients", getAllClients);

// get products
app.get("/products", getAllProducts);

// get stock
app.get("/stock", getStock);
// post order

app.post("/order", createOrder);
