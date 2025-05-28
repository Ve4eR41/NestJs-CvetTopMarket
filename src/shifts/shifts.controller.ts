import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { CreateShiftsDto } from "./dto/CreateShifts.dto";
import { ShiftsService } from "./shifts.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Shifts } from "./shifts.model";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { ValidationPipe } from "../pipes/validation.pipe";
import { get } from 'http';

@ApiTags('///')
@Controller('shifts')
export class ShiftsController {

    constructor(private ShiftsService: ShiftsService) { }



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
        return this.ShiftsService.getAll()
    }



    @ApiOperation({ summary: '...' })
    @ApiResponse({ status: 200, type: [Shifts] })
    @Post("/create")
    create(@Body() dto: CreateShiftsDto) {
        return this.ShiftsService.create(dto)
    }


}
