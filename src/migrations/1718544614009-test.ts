import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Test1718544614009 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'game_result',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'gameType',
            type: 'varchar',
          },
          {
            name: 'gameMode',
            type: 'varchar',
          },
          {
            name: 'score',
            type: 'int',
            default: 0,
          },
          {
            name: 'time',
            type: 'int',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('game_result');
  }
}
