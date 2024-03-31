import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PortoPuzzle } from '../model/PortoPuzzle.model';
import { PortoPuzzleModelName } from '../schema/PortoPuzzle.schema';

@Injectable()
export class PortoPuzzleRepository {
  constructor(
    @InjectModel(PortoPuzzleModelName)
    private readonly portoPuzzleModel: Model<PortoPuzzle>,
  ) {}

  async getDiretores() {
    return this.portoPuzzleModel.find({}, { positivo: 0, negativo: 0 });
  }

  async liberarVotacao(id: string, sorteado: number) {
    return this.portoPuzzleModel.updateOne(
      { _id: id },
      { $set: { sorteado: sorteado } },
    );
  }

  async votar(nome: string, id: string, status: boolean) {
    if (status) {
      return this.portoPuzzleModel.updateOne(
        { _id: id },
        { $push: { positivo: nome } },
      );
    } else {
      return this.portoPuzzleModel.updateOne(
        { _id: id },
        { $push: { negativo: nome } },
      );
    }
  }

  async resultado(id: string) {
    const response: any = await this.portoPuzzleModel.findOne(
      { _id: id },
      { diretor: 0, suporte: 0, sorteado: 0 },
    );

    if (response?.positivo?.length > response?.negativo?.length) {
      return 1;
    } else if (response?.negativo?.length > response?.positivo?.length) {
      return 2;
    } else if (response?.positivo?.length === response?.negativo?.length) {
      return 3;
    }
  }
}
