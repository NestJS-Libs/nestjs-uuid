export interface UuidService {
  generate(options?: UuidServiceOptions): string;
  validate(uuid: string): boolean;
}

export interface UuidServiceOptions {
  readonly version: 1 | 4;
}
