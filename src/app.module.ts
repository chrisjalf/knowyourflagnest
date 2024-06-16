import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameResultModule } from './game-result/game-result.module';
import { KYFDataSourceModule } from './datasources/kyf.datasource';

@Module({
  imports: [KYFDataSourceModule, GameResultModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
