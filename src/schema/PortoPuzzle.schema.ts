// generate-diagram.schema.ts
import { Schema } from 'mongoose';
import { PortoPuzzle } from '../model/PortoPuzzle.model';

export const PortoPuzzleSchema = new Schema<PortoPuzzle>({
  diretor: { type: String, required: true },
  suporte: { type: String, required: true },
  sorteado: { type: Number, required: true },
  positivo: { type: [], required: true },
  negativo: { type: [], required: true },
});

export const PortoPuzzleModelName = 'PortoPuzzle';
