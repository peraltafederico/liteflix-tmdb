import { Logger, Module } from '@nestjs/common'
import { TmdbModule } from '../../services/tmdb/tmdb.module'
import { ConfigController } from './config.controller'
import { ConfigService } from './config.service'

@Module({
  imports: [TmdbModule],
  controllers: [ConfigController],
  providers: [ConfigService, Logger],
})
export class ConfigModule {}
