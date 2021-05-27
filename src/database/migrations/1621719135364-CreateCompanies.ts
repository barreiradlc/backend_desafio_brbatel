import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompanies1621719135364 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'companies',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'thumbnail',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'anual_earnings',
                        type: 'varchar'
                    },
                    {
                        name: 'about',
                        type: 'varchar',
                        isNullable: true
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('companies');
    }

}
