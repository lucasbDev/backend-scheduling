import { Cliente } from "@prisma/client";


interface Barbeiro {
  id: number;
  nome: string;
  cliente?: Cliente;
  clienteId?: number;
  createdAt: Date;
  updatedAt: Date;
}

export default Barbeiro