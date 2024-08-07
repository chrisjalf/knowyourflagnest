import { Controller, Get } from '@nestjs/common';
import { GameResultService } from './game-result.service';

@Controller('game-result')
export class GameResultController {
  constructor(private readonly gameResultService: GameResultService) {}

  @Get('/test')
  async get() {
    return await this.gameResultService.findAll();
  }
}
