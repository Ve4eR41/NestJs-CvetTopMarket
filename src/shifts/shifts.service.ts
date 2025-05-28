import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Shifts } from "./shifts.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateStocksDto } from "./dto/CreateStocks.dto";
import { RolesService } from "../roles/roles.service";
import { Sequelize } from 'sequelize';

@Injectable()
export class StocksService {

    constructor(@InjectModel(Shifts) private stocksRepository: typeof Shifts, private sequelize: Sequelize) { }

    async getAll() {
        const stocks = await this.stocksRepository.findAll({ include: { all: true } });
        return stocks;
    }




}