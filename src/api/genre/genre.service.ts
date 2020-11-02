import { Injectable, Logger } from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { TmdbService } from '../../services/tmdb/tmdb.service'
import { Genre } from './dto/genre.dto'
import { GetGenresRequest } from './dto/get-genres-request.dto'

@Injectable()
export class GenreService {
  constructor(
    private readonly TmdbService: TmdbService,
    private readonly logger: Logger
  ) {}

  getAll(params?: GetGenresRequest): Observable<Genre[]> {
    return this.TmdbService.getGenres(params).pipe(
      map((response) => response.genres),
      tap(() =>
        this.logger.log('Genres response has been normalized successfully')
      ),
      catchError((err) => {
        this.logger.error('There was an error normalizing genres response')

        return throwError(err)
      })
    )
  }
}
