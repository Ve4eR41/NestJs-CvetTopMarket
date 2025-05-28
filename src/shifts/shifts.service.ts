import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Shifts } from "./shifts.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateShiftsDto } from "./dto/CreateShifts.dto";
import { RolesService } from "../roles/roles.service";
import { Sequelize } from 'sequelize';

@Injectable()
export class ShiftsService {

    constructor(@InjectModel(Shifts) private ShiftsRepository: typeof Shifts, private sequelize: Sequelize) { }

    async getAll() {
        const Shifts = await this.ShiftsRepository.findAll({ include: { all: true } });
        return Shifts;
    }



    async create(dto: CreateShiftsDto) {
        const newShifts = await this.ShiftsRepository.create(dto);
        return newShifts;
    }



    async edit() {

    }

} 