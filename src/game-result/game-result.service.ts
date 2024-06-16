import { Injectable } from '@nestjs/common';
import { GameResult } from 'src/entities/game-result.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class GameResultService {
  private gameResultRepository;

  constructor(private dataSource: DataSource) {
    this.gameResultRepository = this.dataSource.getRepository(GameResult);
  }

  findAll(): Promise<GameResult[]> {
    return this.gameResultRepository.find();
  }
}
