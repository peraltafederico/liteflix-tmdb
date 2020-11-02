import { Controller, Get } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger'
import { Observable } from 'rxjs'
import { ConfigService } from './config.service'
import { GetConfigResponse } from './dto/GetConfigResponse.dto'

@Controller('/config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get('/')
  @ApiOkResponse({
    description: 'TMDb configuration returned successfully',
    type: GetConfigResponse,
  })
  getConfig(): Observable<GetConfigResponse> {
    return this.configService.getConfig()
  }
}
