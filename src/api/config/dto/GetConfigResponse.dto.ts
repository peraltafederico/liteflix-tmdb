/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsArray, IsOptional } from 'class-validator'

export class Images {
  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  baseUrl: string

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  secureBaseUrl: string

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  backdropSizes: string[]

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  logoSizes: string[]

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  posterSizes: string[]

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  profileSizes: string[]

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  stillSizes: string[]
}

export class GetConfigResponse {
  @ApiPropertyOptional({ isArray: true, type: Images })
  @IsArray()
  @IsOptional()
  readonly images: Images

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  readonly changeKeys: string[]
}
