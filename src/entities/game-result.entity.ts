import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('game_result')
export class GameResult {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gameType: string;

  @Column()
  gameMode: string;

  @Column()
  score: number;

  @Column()
  time: number;
}
