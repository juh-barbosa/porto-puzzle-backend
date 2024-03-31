import { Document } from 'mongoose';

export interface PortoPuzzle extends Document {
  diretor: string;
  suporte: string;
  sorteado: number;
  positivo: [];
  negativo: [];
}
