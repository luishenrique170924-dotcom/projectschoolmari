import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1764201637000 implements MigrationInterface {
    name = 'Init1764201637000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`course\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`description\` text NOT NULL, \`price\` decimal(10,2) NOT NULL, \`active\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`enrollment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`studentName\` varchar(255) NOT NULL, \`studentEmail\` varchar(255) NOT NULL, \`studentCpf\` varchar(255) NOT NULL, \`studentPhone\` varchar(255) NOT NULL, \`birthDate\` datetime NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`courseId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`collaborator\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`enrollment\` ADD CONSTRAINT \`FK_d1a599a7740b4f4bd1120850f04\` FOREIGN KEY (\`courseId\`) REFERENCES \`course\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`enrollment\` DROP FOREIGN KEY \`FK_d1a599a7740b4f4bd1120850f04\``);
        await queryRunner.query(`DROP TABLE \`collaborator\``);
        await queryRunner.query(`DROP TABLE \`enrollment\``);
        await queryRunner.query(`DROP TABLE \`course\``);
    }

}
