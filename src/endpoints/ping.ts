import {Request, Response} from "express"

export const ping = (req:Request, res:Response) => {
    let errorCode = 400
    try {
        res.status(200).send("Pong!")
        
    } catch (error) {
        res.status(errorCode).send({ error: error.message})
    }
}