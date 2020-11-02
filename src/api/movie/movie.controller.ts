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
  getNowPlayingMovies(
    @Query() params: GetMoviesRequest
  ): Observable<GetMoviesResponse> {
    return this.movieService.getNowPlayingMovies(params)
  }

  @Get('/upcoming')
  @ApiOkResponse({
    description: 'Upcoming movies returned successfully',
    type: GetMoviesResponse,
  })
  getUpcomingMovies(
    @Query() params: GetMoviesRequest
  ): Observable<GetMoviesResponse> {
    return this.movieService.getUpcomingMovies(params)
  }

  @Get('/popular')
  @ApiOkResponse({
    description: 'Popular movies returned successfully',
    type: GetMoviesResponse,
  })
  getPopularMovies(
    @Query() params: GetMoviesRequest
  ): Observable<GetMoviesResponse> {
    return this.movieService.getPopularMovies(params)
  }
}
