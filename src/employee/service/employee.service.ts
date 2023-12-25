import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private dbService: PrismaService) {}

  async getAllEmployees() {
    const employee_list = await this.dbService.employee.findMany();
    return employee_list;
  }
}
