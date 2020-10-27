import { Injectable, Logger } from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { TmdbService } from '../../services/tmdb/tmdb.service'
import { Genre } from './dto/genre.dto'

@Injectable()
export class GenreService {
  constructor(
    private readonly TmdbService: TmdbService,
    private readonly logger: Logger
  ) {}

  getAll(): Observable<Genre[]> {
    return this.TmdbService.getGenres().pipe(
      map((response) => response.genres),
      catchError((err) => {
        this.logger.error('There was an error normalizing genres response')

        return throwError(err)
      })
    )
  }
}
