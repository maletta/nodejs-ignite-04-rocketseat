import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterUserAddAvatar1697343587062 implements MigrationInterface {
  public readonly tableName = 'users';
  public readonly columnName = 'avatar';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: this.columnName,
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.columnName);
  }
}
