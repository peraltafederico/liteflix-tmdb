import { Logger, Module } from '@nestjs/common'
import { TmdbModule } from '../../services/tmdb/tmdb.module'
import { GenreController } from './genre.controller'
import { GenreService } from './genre.service'

@Module({
  imports: [TmdbModule],
  controllers: [GenreController],
  providers: [GenreService, Logger],
})
export class GenreModule {}
