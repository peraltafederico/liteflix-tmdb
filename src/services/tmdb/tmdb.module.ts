import { HttpModule, Logger, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TmdbService } from './tmdb.service'

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        baseURL: `${configService.get('tmdbBaseURL')}/3`,
        params: {
          api_key: configService.get('tmdbApiKey'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [TmdbService, Logger],
  exports: [TmdbService],
})
export class TmdbModule {}
