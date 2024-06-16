import { MigrationInterface, QueryRunner } from 'typeorm';

export class Test1718544614009 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE \`game_result\` (
        \`id\` INT AUTO_INCREMENT PRIMARY KEY,
        \`gameType\` VARCHAR(255) NOT NULL,
        \`gameMode\` VARCHAR(255) NOT NULL,
        \`score\` INT NOT NULL DEFAULT 0,
        \`time\` INT NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`game_result\``);
  }
}
