import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEmployeeDto, UpdateEmployeeDto } from '../models/emplyee.dto';
import { EmployeeService } from '../service/employee.service';

@ApiTags('Employee')
@Controller('employee')
export class EmployeeController {
  constructor(private empService: EmployeeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new employee' })
  @ApiResponse({
    status: 200,
    description: 'The employee has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return await this.empService.createEmployee(createEmployeeDto);
  }

  @Put(':ssn')
  @ApiOperation({ summary: 'Update employee' })
  updateEmployee(
    @Param('ssn') ssn: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.empService.updateEmployee(ssn, updateEmployeeDto);
  }

  @Delete(':ssn')
  @ApiOperation({ summary: 'Delete employee' })
  deleteEmployee(@Param('ssn') ssn: string) {
    return this.empService.deleteEmployee(ssn);
  }

  @Get(':ssn')
  @ApiOperation({ summary: 'Get employee with ssn' })
  getEmployeeBySSN(@Param('ssn') ssn: string) {
    return this.empService.getEmployeeBySSN(ssn);
  }

  @Get()
  @ApiOperation({ summary: 'Get all employee' })
  async getAllEmployees() {
    return this.empService.getAllEmployees();
  }
}
