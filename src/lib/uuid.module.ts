import { Module } from '@nestjs/common';
import { UuidGeneratorService } from './services/uuid-generator.service';
import { UuidServiceToken } from './uuid.consts';

@Module({
  providers: [
    {
      provide: UuidServiceToken,
      useClass: UuidGeneratorService,
    },
  ],
  exports: [UuidServiceToken],
})
export class UuidModule {}
