import { Type } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsDate,
  IsString,
  Length,
  IsOptional,
} from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty()
  @IsString()
  @Length(11, 11)
  ssn: string;

  @ApiProperty()
  @IsString()
  @Length(1, 60)
  first_name: string;

  @ApiProperty()
  @IsString()
  @Length(1, 90)
  last_name: string;

  @ApiProperty()
  @IsString()
  @Length(1, 1)
  sex: string;

  @ApiProperty()
  @IsString()
  @Length(1, 500)
  address: string;

  @ApiProperty({ type: Date })
  @IsDate()
  birth_date: Date;
}

export class UpdateEmployeeDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @Length(1, 60)
  first_name?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @Length(1, 90)
  last_name?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @Length(1, 1)
  sex?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @Length(1, 500)
  address?: string;

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  birth_date?: Date;
}
