import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableUsers1697315982835 implements MigrationInterface {
  private readonly tableName = 'users';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} ADD PRIMARY KEY (id);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} DROP CONSTRAINT ${this.tableName}_pkey;`,
    );
  }
}
