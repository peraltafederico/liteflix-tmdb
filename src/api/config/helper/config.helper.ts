import { camelCase } from 'lodash'
import { GetTmdbConfigResponse } from 'src/services/tmdb/interfaces/get-tmdb-config-response.interface'
import { GetConfigResponse, Images } from '../dto/GetConfigResponse.dto'

export class ConfigHelper {
  static normalizeConfig(config: GetTmdbConfigResponse): GetConfigResponse {
    return Object.keys(config).reduce((normalizedResponse, key) => {
      if (key === 'images') {
        normalizedResponse[camelCase(key)] = Object.keys(config[key]).reduce(
          (normalizedImages, iKey) => {
            normalizedImages[camelCase(iKey)] = config[key][iKey]

            return normalizedImages
          },
          {} as Images
        )

        return normalizedResponse
      }

      normalizedResponse[camelCase(key)] = config[key]

      return normalizedResponse
    }, {} as GetConfigResponse)
  }
}
