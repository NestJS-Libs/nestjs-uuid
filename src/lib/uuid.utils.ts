import * as uuid from 'uuid';

export function generateUuidV4() {
  return uuid.v4();
}

export function generateUuidV1() {
  return uuid.v1();
}

export function validateUuid(value: string): boolean {
  return uuid.validate(value);
}
