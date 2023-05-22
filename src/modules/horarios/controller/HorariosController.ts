import { Request, Response } from "express";
import  AppError  from '../../../shared/Errors/AppError'
import { HorariosService } from "../models/services/HorarioService";

const horariosService = new HorariosService();

export class HorariosController {
  async criarHorario(request: Request, response: Response) {
      const { data } = request.body;
      const horario = await horariosService.criarHorario(data);
      if(!horario){
            throw new AppError('Não foi possível agendar nesse Horário!')
        }
      return response.status(201).json(horario);
    }

  async buscarHorario(request: Request, response: Response) {
      const { id } = request.params;
      const horario = await horariosService.buscarHorario(Number(id));
      if (!horario) {
        throw new AppError('Horário não encontrado')
      }
      return response.status(200).json(horario);
    }

  async atualizarHorario(request: Request, response: Response) {
      const { id } = request.params;
      const { data } = request.body;
      const horario = await horariosService.atualizarHorario(Number(id), data);
      if (!horario) {
        throw new AppError('Horário não encontrado')
      }
  }
}

export default HorariosController