import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { CreateStocksDto } from "./dto/CreateStocks.dto";
import { StocksService } from "./shifts.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Shifts } from "./shifts.model";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { ValidationPipe } from "../pipes/validation.pipe";
import { get } from 'http';

@ApiTags('///')
@Controller('stocks')
export class StocksController {

    constructor(private stocksService: StocksService) { }



    @ApiOperation({ summary: 'тестовый запрос для проверки того что все работает' })
    @ApiResponse({ status: 200, type: [Shifts] })
    @Get("/test")
    getTest() {
        return "Hello !"
    }



    @ApiOperation({ summary: '...' })
    @ApiResponse({ status: 200, type: [Shifts] })
    @Get("/all")
    getAll() {
        return this.stocksService.getAll()
    }


}
