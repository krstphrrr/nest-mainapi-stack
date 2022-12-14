import { Body, Controller, Get, Query, Req } from '@nestjs/common';
import { ApiBody, ApiExtraModels, ApiOkResponse, ApiParam, ApiQuery } from '@nestjs/swagger';

import { CustomRequestObjHandler } from '../CustomRequest.decorator'
import { DatagapService } from './datagap.service';
import { dtoDataGap } from './dto/get-datagap.dto';
import { DatagapEnt } from './entities/datagap.entity';


@Controller('datagap')
export class DatagapController {
  constructor(private readonly datagapService: DatagapService) {}

  @Get()
  @ApiOkResponse({ type: DatagapEnt, isArray: true })
  GetGap(
    // pagination
    @Query('take') take?: string,
    @Query('cursor') cursor?: string,

    @CustomRequestObjHandler(dtoDataGap) ValidatedParams?: DatagapEnt,
  ) {
    if (take) {
      ValidatedParams['take'] = Number(take);
    }
    if (cursor) {
      ValidatedParams['cursor'] = Number(cursor);
    }
    // prisma requires an additional "in" when filtering
    // an array of values in the request.query param
    // const {take, cursor} = GapQueries;
    for (const [key, value] of Object.entries(ValidatedParams['params'])) {
      // do NOT modify the take param! everything else can be considered
      // an array of 1
      if (Array.isArray(value) && key != 'take' && key != 'cursor') {
        ValidatedParams['params'][key] = { in: value };
      }
    }
    return this.datagapService.FindManyGap(ValidatedParams);
  }
}
