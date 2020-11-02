import { Controller, Get, Query } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger'
import { Observable } from 'rxjs'
import { Genre } from './dto/genre.dto'
import { GetGenresRequest } from './dto/get-genres-request.dto'
import { GenreService } from './genre.service'

@Controller('/genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get('/')
  @ApiOkResponse({
    description: 'All genres returned successfully',
    type: [Genre],
  })
  getAll(@Query() params: GetGenresRequest): Observable<Genre[]> {
    return this.genreService.getAll(params)
  }
}
