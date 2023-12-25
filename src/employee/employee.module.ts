import { Module } from '@nestjs/common';
import { EmployeeController } from './controller/employee.controller';
import { EmployeeService } from './service/employee.service';
import { PrismaService } from './service/prisma.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, PrismaService],
})
export class EmployeeModule {}
