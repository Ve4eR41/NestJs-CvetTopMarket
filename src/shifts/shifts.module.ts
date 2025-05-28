import { forwardRef, Module } from '@nestjs/common';
import { StocksController } from './shifts.controller';
import { StocksService } from './shifts.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Shifts } from "./shifts.model";
import { RolesModule } from "../roles/roles.module";
import { AuthModule } from "../auth/auth.module";

@Module({
    controllers: [StocksController],
    providers: [StocksService],
    imports: [
        RolesModule,
        forwardRef(() => AuthModule),
    ],
    exports: [
        StocksService,
    ]
})
export class StocksModule { }
