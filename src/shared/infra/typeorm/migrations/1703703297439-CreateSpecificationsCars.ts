import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateSpecificationsCars1703703297439
  implements MigrationInterface
{
  private readonly tableName = 'specifications_cars';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'car_id',
            type: 'uuid',
          },
          {
            name: 'specification_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        name: 'FKSpecificationCar',
        referencedTableName: 'specifications',
        referencedColumnNames: ['id'], // da tabela specification
        columnNames: ['specification_id'], // da tabela specifications_cars
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        name: 'FKCarSpecification',
        referencedTableName: 'cars',
        referencedColumnNames: ['id'], // da tabela cars
        columnNames: ['car_id'], // da tabela specifications_cars
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // primeiro remove as chaves estrangeiras
    await queryRunner.dropForeignKey(this.tableName, 'FKSpecificationCar');
    await queryRunner.dropForeignKey(this.tableName, 'FKCarSpecification');
    // primeiro remove a tabela
    await queryRunner.dropTable(this.tableName);
  }
}
