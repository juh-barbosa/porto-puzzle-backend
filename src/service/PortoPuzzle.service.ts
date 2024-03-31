import { Injectable } from '@nestjs/common';
import { PortoPuzzleRepository } from '../repository/PortoPuzzle.repository';

@Injectable()
export class PortoPuzzleService {
  constructor(private readonly repository: PortoPuzzleRepository) {}

  async getDiretores(){
    return await this.repository.getDiretores();
  }

  async liberarVotacao(id: string, sorteado: number){
    return await this.repository.liberarVotacao(id, sorteado);
  }

  async votar(nome: string, id: string, status: boolean){
    return await this.repository.votar(nome, id, status);
  }

  async resultado(id: string){
    return await this.repository.resultado(id);
  }
}
