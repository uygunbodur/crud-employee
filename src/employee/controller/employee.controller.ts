import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from '../service/employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private empService: EmployeeService) {}

  @Get('/all')
  async getAllEmployees() {
    return this.empService.getAllEmployees();
  }
}
