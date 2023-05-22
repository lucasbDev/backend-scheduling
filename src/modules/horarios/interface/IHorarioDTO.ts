import { Cliente } from "@prisma/client";


interface Horarios {
  id: number;
  date: Date;
  cliente?: Cliente;
  clienteId?: number;
  disponivel: boolean;
}

export default Horarios