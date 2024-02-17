import { Module } from '@nestjs/common';
import { UuidService } from 'src/lib/services/uuid-generator.service';

@Module({
  providers: [UuidService],
  exports: [UuidService],
})
export class UuidModule {}
