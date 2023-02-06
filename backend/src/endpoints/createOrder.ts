import { Request, Response } from "express";
import connection from "../database/connection";
import { TProducts } from "../models/Products";

export const createOrder = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { delivery_date, fk_client } = req.body;
    const products: TProducts[] = req.body.products;
    if (!delivery_date || !products || !fk_client) {
      throw new Error("NomeBody inválido");
    }
    //verify stock
    await products.forEach(async (product) => {
      const getStock = await connection
      .select("qty_stock")
      .from("Case_Products")
      .where({ id: product.id });
    const stock = Number(getStock[0].qty_stock);

      if(stock < product.qty) {
        throw new Error ("Estoque indisponível.")
      }
    })
    //order
    await products.forEach(async (product) => {
      await connection("Case_Orders").insert({
        order_date: new Date().toISOString().slice(0, 10),
        delivery_date,
        fk_client,
        qty: product.qty,
        fk_product: product.id,
      });
      //get stock
      const getStock = await connection
        .select("qty_stock")
        .from("Case_Products")
        .where({ id: product.id });
      const stock = Number(getStock[0].qty_stock);
      //update stock
      await connection("Case_Products")
        .where({ id: product.id })
        .update({ qty_stock: stock - product.qty });
    });

    res.status(200).send("Pedido criado com sucesso.");
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
