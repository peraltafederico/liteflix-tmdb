import { HttpService, Injectable, Logger } from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { GetMoviesRequest } from '../../commons/dto/get-movies-request.dto'
import { GetTmdbGenresResponse } from './interfaces/get-tmdb-genres-response.interface'
import { GetTmdbMoviesResponse } from '../../commons/interfaces/get-tmdb-movies.response.interface'

@Injectable()
export class TmdbService {
  constructor(private httpService: HttpService, private logger: Logger) {}

  getNowPlayingMovies(
    params?: GetMoviesRequest
  ): Observable<GetTmdbMoviesResponse> {
    return this.httpService
      .get<GetTmdbMoviesResponse>('/movie/now_playing', { params })
      .pipe(
        map((response) => response.data),
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
        catchError((err) => {
          this.logger.error('There was an error getting popular movies')

          return throwError(err)
        })
      )
  }

  getGenres(): Observable<GetTmdbGenresResponse> {
    return this.httpService
      .get<GetTmdbGenresResponse>('/genre/movie/list')
      .pipe(
        map((response) => response.data),
        catchError((err) => {
          this.logger.error('There was an error getting genres')

          return throwError(err)
        })
      )
  }
}
