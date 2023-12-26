import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto, UpdateEmployeeDto } from '../models/emplyee.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private dbService: PrismaService) {}

  async getAllEmployees() {
    const employee_list = await this.dbService.employee.findMany();
    return employee_list;
  }
  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    return await this.dbService.employee.create({
      data: {
        ssn: createEmployeeDto.ssn,
        first_name: createEmployeeDto.first_name,
        last_name: createEmployeeDto.last_name,
        address: createEmployeeDto.address,
        sex: createEmployeeDto.sex,
        birth_date: new Date(createEmployeeDto.birth_date),
      },
    });
  }

  async updateEmployee(ssn: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.dbService.employee.update({
      where: { ssn },
      data: {
        first_name: updateEmployeeDto.first_name,
        last_name: updateEmployeeDto.last_name,
        address: updateEmployeeDto.address,
        sex: updateEmployeeDto.sex,
        birth_date: new Date(updateEmployeeDto.birth_date),
      },
    });
  }

  async deleteEmployee(ssn: string) {
    return this.dbService.employee.delete({
      where: { ssn },
    });
  }

  async getEmployeeBySSN(ssn: string) {
    return this.dbService.employee.findUnique({
      where: { ssn },
    });
  }
}
