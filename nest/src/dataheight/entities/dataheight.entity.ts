import { dataHeight } from '@prisma/client';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export class DataheightEnt implements dataHeight {
  @ApiHideProperty()
  take?: number;

  @ApiHideProperty()
  cursor?: number;

  @ApiProperty({
    type: Number,
    required: false,
    description: 'Autoincrement id generated by the database.',
  })
  rid: number;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  PrimaryKey: string;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  DBKey: string;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  ProjectKey: string;

  @ApiProperty({
    type: Number,
    required: false,
    description: '',
  })
  PointLoc: number;

  @ApiProperty({
    type: Number,
    required: false,
    description: '',
  })
  PointNbr: number;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  RecKey: string;

  @ApiProperty({
    type: Number,
    required: false,
    description: '',
  })
  Height: number;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  Species: string;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  Chkbox: string;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  type: string;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  GrowthHabit_measured: string;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  LineKey: string;

  @ApiProperty({
    type: Date,
    required: false,
    // example: '2021-08-04',
    description: '',
  })
  DateModified: Date;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  FormType: string;

  @ApiProperty({
    type: Date,
    required: false,
    // example: '2021-08-04',
    description: '',
  })
  FormDate: Date;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  source: string;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  Direction: string;

  @ApiProperty({
    type: Number,
    required: false,
    description: '',
  })
  Measure: number;

  @ApiProperty({
    type: Number,
    required: false,
    description: '',
  })
  LineLengthAmount: number;

  @ApiProperty({
    type: Number,
    required: false,
    description: '',
  })
  SpacingIntervalAmount: number;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  SpacingType: string;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  HeightOption: string;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  HeightUOM: string;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  ShowCheckbox: string;

  @ApiProperty({
    type: String,
    required: false,
    description: '',
  })
  CheckboxLabel: string;

  @ApiProperty({
    type: Date,
    required: false,
    // example: '2021-08-04',
    description: '',
  })
  DateLoadedInDb: Date;
}
