import { Inject } from '@nestjs/common';
import { UuidServiceToken } from './uuid.consts';

export function InjectUuidService() {
  return Inject(UuidServiceToken);
}
