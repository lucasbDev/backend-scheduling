import { Router } from "express";
import clientesRouter from "../../modules/cliente/routes/Clientes.routes";
import horariosRouter from "../../modules/horarios/controller/HorariosController";

const routes = Router()

routes.use('/clientes', clientesRouter)
//routes.use('/horarios', horariosRouter)

export default routes