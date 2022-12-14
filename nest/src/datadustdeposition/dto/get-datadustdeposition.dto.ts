import { ApiProperty, ApiQuery } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

export class dtoDataDustDeposition {

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  rid: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  StackID: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  ProjectKey: string;

  @Type(() => Date)
  DateEstablished: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Location: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Notes: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  ItemType: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  trapOpeningArea: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  GPSCoordSys: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Datum: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  Zone: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Easting: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Northing: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Longitude: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  Latitude: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  RecKey: string;

  @Type(() => Date)
  collectDate: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  breakerNbr: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  emptyWeight: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  recordedWeight: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  sedimentWeight: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  daysExposed: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  sedimentGprDay: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  sedimentArchived: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  sedimentGperDayByInlet: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>Number(id)))
  SeqNo: number;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  SampleCompromised: string;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  PrimaryKey: string;

  @Type(() => Date)
  DateLoadedInDb: Date;

  @Transform(({ value }) => value.trim().split(',').map(id=>String(id)))
  DBKey: string;
}
