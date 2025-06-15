import { Response, Request } from "express";
import { authService } from "./auth.service";


const createRegister = async (req : Request, res: Response) =>{
try {
    const user = await authService.registerDb(req.body)
    res.send({data:user})
} catch (error) {
    console.log(error)
}
}

export const authController = {
    createRegister
}