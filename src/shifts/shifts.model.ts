import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface ShiftsCreationAttrs {

}

@Table({ tableName: 'shifts' })
export class Shifts extends Model<Shifts, ShiftsCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryKey
    @Column({ type: DataType.INTEGER })
    id: number;

    @ApiProperty({ example: '1', description: '' })
    @Column({ type: DataType.DATE })
    timeStart: Date;

    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.DATE })
    timeEnd: number;

    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER })
    shopName: number;

    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER })
    revenue: number;

    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER })
    cheks: number;

}
