import { Injectable } from '@nestjs/common';
import { UuidService, UuidServiceOptions } from '../contracts/uuid.service';
import { generateUuidV1, generateUuidV4, validateUuid } from '../uuid.utils';

@Injectable()
export class UuidGeneratorService implements UuidService {
  generate(options?: UuidServiceOptions): string {
    if (!options) {
      return generateUuidV4();
    }

    switch (options.version) {
      case 1: {
        return generateUuidV1();
      }
      case 4: {
        return generateUuidV4();
      }
      default: {
        throw new Error(`Unsupported UUID version: ${options.version}`);
      }
    }
  }

  public validate(uuid: string): boolean {
    return validateUuid(uuid);
  }
}
