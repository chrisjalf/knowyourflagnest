import { Module } from '@nestjs/common';
import { GameResultService } from './game-result.service';
import { GameResultController } from './game-result.controller';

@Module({
  imports: [],
  controllers: [GameResultController],
  providers: [GameResultService],
})
export class GameResultModule {}
