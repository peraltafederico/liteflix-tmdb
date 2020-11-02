import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class GetGenresRequest {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly language?: string
}
