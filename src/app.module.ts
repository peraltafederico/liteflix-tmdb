import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ConfigModule as TmdbConfigModule } from './api/config/config.module'
import { GenreModule } from './api/genre/genre.module'
import { MovieModule } from './api/movie/movie.module'
import envConfig from './config/environment.config'
import { TmdbModule } from './services/tmdb/tmdb.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      isGlobal: true,
    }),
    TmdbConfigModule,
    TmdbModule,
    MovieModule,
    GenreModule,
  ],
})
export class AppModule {}
