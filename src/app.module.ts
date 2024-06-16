import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameResultModule } from './game-result/game-result.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'knowyourflag',
      entities: ['../entities/*.ts'],
    }),
    GameResultModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
