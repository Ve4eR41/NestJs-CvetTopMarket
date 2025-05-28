import { forwardRef, Module } from '@nestjs/common';
import { ShiftsController } from './shifts.controller';
import { ShiftsService } from './shifts.service';
import { RolesModule } from "../roles/roles.module";
import { AuthModule } from "../auth/auth.module";
import { Shifts } from './shifts.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    controllers: [ShiftsController],
    providers: [ShiftsService],
    imports: [
        RolesModule,
        SequelizeModule.forFeature([Shifts]),
        forwardRef(() => AuthModule),
    ],
    exports: [
        ShiftsService,
    ]
})
export class ShiftsModule { }
