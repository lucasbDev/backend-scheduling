import { PrismaClient, Horarios } from "@prisma/client";

const prisma = new PrismaClient();

export class HorariosService {
  async criarHorario(data: Horarios): Promise<Horarios> {
    const horario = await prisma.horarios.create({
      data,
    });
    return horario;
  }

  async buscarHorario(id: number): Promise<Horarios | null> {
    const horario = await prisma.horarios.findUnique({
      where: { id },
    });
    return horario;
  }

  async atualizarHorario(id: number, data: Horarios): Promise<Horarios | null> {
    const horario = await prisma.horarios.update({
      where: { id },
      data,
    });
    return horario;
  }

  async deletarHorario(id: number): Promise<Horarios | null> {
    const horario = await prisma.horarios.delete({
      where: { id },
    });
    return horario;
  }
}

export default HorariosService