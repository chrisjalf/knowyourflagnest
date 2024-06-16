import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
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