import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class GetMoviesRequest {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  readonly page?: string
}
