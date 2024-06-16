import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameResultService } from './game-result.service';
import { GameResultController } from './game-result.controller';
import { GameResult } from '../entities/game-result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameResult])],
  controllers: [GameResultController],
  providers: [GameResultService],
})
export class GameResultModule {}
