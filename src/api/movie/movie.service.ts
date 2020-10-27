import { Injectable } from '@nestjs/common'
import { Logger } from '@nestjs/common/services/logger.service'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { GetMoviesRequest } from '../../commons/dto/get-movies-request.dto'
import { TmdbService } from '../../services/tmdb/tmdb.service'
import { GetMoviesResponse } from './dto/get-movies-response.dto'
import { MovieHelper } from './helpers/movie.helper'

@Injectable()
export class MovieService {
  constructor(
    private tmdbService: TmdbService,
    private readonly logger: Logger
  ) {}

  getNowPlayingMovies(params?: GetMoviesRequest): Observable<GetMoviesResponse> {
    return this.tmdbService.getNowPlayingMoviess(params).pipe(
      map(MovieHelper.normalizeMoviesFromResponse),
      catchError((err) => {
        this.logger.error('There was an error normalizing now-playing movies')

        return throwError(err)
      })
    )
  }

  getUpcomingMovies(params?: GetMoviesRequest): Observable<GetMoviesResponse> {
    return this.tmdbService.getUpcomingMovies(params).pipe(
      map(MovieHelper.normalizeMoviesFromResponse),
      catchError((err) => {
        this.logger.error('There was an error normalizing upcoming movies')

        return throwError(err)
      })
    )
  }

  getPopularMovies(params?: GetMoviesRequest): Observable<GetMoviesResponse> {
    return this.tmdbService.getPopularMovies(params).pipe(
      map(MovieHelper.normalizeMoviesFromResponse),
      catchError((err) => {
        this.logger.error('There was an error normalizing popular movies')

        return throwError(err)
      })
    )
  }
}
