import { Test } from '@nestjs/testing';
import { UuidModule } from '../uuid.module';
import { UuidService } from '../contracts/uuid.service';
import { UuidServiceToken } from '../uuid.consts';

describe('UUIDGeneratorService', () => {
  let service: UuidService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [UuidModule],
    }).compile();

    service = module.get<UuidService>(UuidServiceToken);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(service).toHaveProperty('generate');
    expect(service).toHaveProperty('validate');
  });

  it('should generate a valid UUID v4', () => {
    const uuid = service.generate();
    expect(uuid.at(14)).toBe('4');
    expect(service.validate(uuid)).toBe(true);
  });

  it('should generate a valid UUID v1', () => {
    const uuid = service.generate({ version: 1 });
    expect(uuid.at(14)).toBe('1');
    expect(service.validate(uuid)).toBe(true);
  });

  it('should validate an UUID', () => {
    expect(
      service.validate('41a5bb97-c1d9-42e8-9bb6-dca5977ac628'),
    ).toBeTruthy();
  });

  it('should fail when an invalid UUID is provided', () => {
    expect(
      service.validate('00000000-0000-0000-0000-000000000000 '),
    ).toBeFalsy();
  });
});
