import { Router } from "express";
import HorariosController from "../controller/HorariosController";

const horariosRouter = Router()

const horariosController = new HorariosController()

horariosRouter.post('/',horariosController.criarHorario)
horariosRouter.get('/:id',horariosController.buscarHorario)
horariosRouter.put('/:id',horariosController.atualizarHorario)

export default horariosRouter