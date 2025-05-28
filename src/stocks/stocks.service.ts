import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Stocks } from "./stocks.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateStocksDto } from "./dto/CreateStocks.dto";
import { RolesService } from "../roles/roles.service";
import { Sequelize } from 'sequelize';

@Injectable()
export class StocksService {

    constructor(@InjectModel(Stocks) private stocksRepository: typeof Stocks, private sequelize: Sequelize) { }

    async getAll() {
        const stocks = await this.stocksRepository.findAll({ include: { all: true } });
        return stocks;
    }



    async getByFilter() {
        const stocks = await this.stocksRepository.findAll({ include: { all: true } });
        return stocks;
    }



    async create(dto: CreateStocksDto[]) {
        console.log(dto)
        const stocks = await this.stocksRepository.bulkCreate(dto);
        return stocks;
    }



    async destroy() {
        const stocks = await this.stocksRepository.destroy({ where: { name: 'test' } });
        return stocks;
    }





}