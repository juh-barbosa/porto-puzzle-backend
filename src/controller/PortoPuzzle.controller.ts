import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { PortoPuzzleService } from '../service/PortoPuzzle.service';

@Controller('api/puzzle')
export class PortoPuzzleController {
  constructor(private readonly service: PortoPuzzleService) {}

  @Get('')
  async getDiretores() {
    return await this.service.getDiretores();
  }

  @Put('/:id')
  async liberarVotacao(@Param('id') id: string, @Body() body: { sorteado: number }){
    return await this.service.liberarVotacao(id, body.sorteado);
  }

  @Put('votacao/:nome')
  async votar(@Param('nome') nome: string, @Body() body: { id: string, status: boolean }){
    return await this.service.votar(nome, body.id, body.status);
  }

  @Get('votacao/resultado/:id')
  async resultado(@Param('id') id: string){
    return await this.service.resultado(id);
  }
}
