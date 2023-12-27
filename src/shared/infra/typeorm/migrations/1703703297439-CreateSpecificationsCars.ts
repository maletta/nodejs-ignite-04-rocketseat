import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSpecificationsCars1703703297439
  implements MigrationInterface
{
  private readonly tableName = 'specifications_cars';
  public async up(queryRunner: QueryRunner): Promise<void> {}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
