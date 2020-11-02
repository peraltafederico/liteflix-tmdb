import { HttpService, Injectable, Logger } from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { GetGenresRequest } from '../../api/genre/dto/get-genres-request.dto'
import { GetMoviesRequest } from '../../commons/dto/get-movies-request.dto'
import { GetTmdbGenresResponse } from './interfaces/get-tmdb-genres-response.interface'
import { GetTmdbMoviesResponse } from '../../commons/interfaces/get-tmdb-movies.response.interface'
import { GetTmdbConfigResponse } from './interfaces/get-tmdb-config-response.interface'

@Injectable()
export class TmdbService {
  constructor(private httpService: HttpService, private logger: Logger) {}

  getNowPlayingMoviess(
    params?: GetMoviesRequest
  ): Observable<GetTmdbMoviesResponse> {
    return this.httpService
      .get<GetTmdbMoviesResponse>('/movie/now_playing', { params })
      .pipe(
        map((response) => response.data),
        tap(() => this.logger.log('Now-playing movies returned successfully')),
        catchError((err) => {
          this.logger.error('There was an error getting now-playing movies')

          return throwError(err)
        })
      )
  }

  getUpcomingMovies(
    params?: GetMoviesRequest
  ): Observable<GetTmdbMoviesResponse> {
    return this.httpService
      .get<GetTmdbMoviesResponse>('/movie/upcoming', { params })
      .pipe(
        map((response) => response.data),
        tap(() => this.logger.log('Upcoming movies returned successfully')),
        catchError((err) => {
          this.logger.error('There was an error getting upcoming movies')

          return throwError(err)
        })
      )
  }

  getPopularMovies(
    params?: GetMoviesRequest
  ): Observable<GetTmdbMoviesResponse> {
    return this.httpService
      .get<GetTmdbMoviesResponse>('/movie/popular', { params })
      .pipe(
        map((response) => response.data),
        tap(() => this.logger.log('Popular movies returned successfully')),
        catchError((err) => {
          this.logger.error('There was an error getting popular movies')

          return throwError(err)
        })
      )
  }

  getGenres(params?: GetGenresRequest): Observable<GetTmdbGenresResponse> {
    return this.httpService
      .get<GetTmdbGenresResponse>('/genre/movie/list', { params })
      .pipe(
        map((response) => response.data),
        tap(() => this.logger.log('Genres returned successfully')),
        catchError((err) => {
          this.logger.error('There was an error getting genres')

          return throwError(err)
        })
      )
  }

  getConfig(): Observable<GetTmdbConfigResponse> {
    return this.httpService.get<GetTmdbConfigResponse>('/configuration').pipe(
      map((response) => response.data),
      catchError((err) => {
        this.logger.error('There was an error getting configuration')

        return throwError(err)
      })
    )
  }
}
