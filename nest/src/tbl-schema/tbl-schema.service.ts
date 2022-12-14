import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { tblSchema } from '@prisma/client';

@Injectable()
export class TblSchemaService {
  constructor(public prisma: PrismaService) {}

  FindManyTblSchema(SchemaVersion: string): Promise<tblSchema[] | null> {
    return this.prisma.tblSchema.findMany({
      where: { Version: SchemaVersion },
    });
  }

  FindAllTblSchema(): Promise<tblSchema[] | null> {
    return this.prisma.tblSchema.findMany();
  }

  async FindLatestSchema(): Promise<tblSchema[] | null> {
    const maxVersion = await this.prisma.tblSchema.aggregate({
      _max: {
        Version: true,
      },
    });
    // return max
    return this.prisma.tblSchema.findMany({
      where: { Version: maxVersion._max.Version}
    });
  }
}