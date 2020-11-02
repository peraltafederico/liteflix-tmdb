import { Injectable, Logger } from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { TmdbService } from '../../services/tmdb/tmdb.service'
import { GetConfigResponse } from './dto/GetConfigResponse.dto'
import { ConfigHelper } from './helper/config.helper'

@Injectable()
export class ConfigService {
  constructor(
    private readonly TmdbService: TmdbService,
    private readonly logger: Logger
  ) {}

  getConfig(): Observable<GetConfigResponse> {
    return this.TmdbService.getConfig().pipe(
      map((response) => ConfigHelper.normalizeConfig(response)),
      tap(() =>
        this.logger.log('Config response has been normalized successfully')
      ),
      catchError((err) => {
        this.logger.error('There was an error normalizing config response')

        return throwError(err)
      })
    )
  }
}
