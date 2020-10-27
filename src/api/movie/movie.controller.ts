import { Controller, Get, Query } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger'
import { Observable } from 'rxjs'
import { GetMoviesRequest } from '../../commons/dto/get-movies-request.dto'
import { GetMoviesResponse, Movie } from './dto/get-movies-response.dto'
import { MovieService } from './movie.service'

@Controller('/movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/now-playing')
  @ApiOkResponse({
    description: 'Featured movie returned successfully',
    type: Movie,
  })
  getNowPlayingMovie(
    @Query() { page }: GetMoviesRequest
  ): Observable<GetMoviesResponse> {
    return this.movieService.getNowPlayingMovie({ page })
  }

  @Get('/upcoming')
  @ApiOkResponse({
    description: 'Upcoming movies returned successfully',
    type: GetMoviesResponse,
  })
  getUpcomingMovies(
    @Query() { page }: GetMoviesRequest
  ): Observable<GetMoviesResponse> {
    return this.movieService.getUpcomingMovies({ page })
  }

  @Get('/popular')
  @ApiOkResponse({
    description: 'Popular movies returned successfully',
    type: GetMoviesResponse,
  })
  getPopularMovies(
    @Query() { page }: GetMoviesRequest
  ): Observable<GetMoviesResponse> {
    return this.movieService.getPopularMovies({ page })
  }
}
