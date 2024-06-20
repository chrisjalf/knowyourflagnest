import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1718889383795 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE \`user\` (
            \`id\` INT AUTO_INCREMENT PRIMARY KEY,
            \`email\` VARCHAR(255) NOT NULL,
            \`password\` VARCHAR(255) NOT NULL,
            \`name\` VARCHAR(255) NOT NULL  
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
