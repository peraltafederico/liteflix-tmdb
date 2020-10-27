import * as dotenv from 'dotenv'

dotenv.config()

interface EnvironmentConfiguration {
  TMDBApiKey: string
  TMDBBaseURL: string
  TMDBLanguage: string
}

const { TMDB_API_KEY, TMDB_BASE_URL, TMDB_LANGUAGE } = process.env

const envConfig = (): EnvironmentConfiguration => ({
  TMDBApiKey: TMDB_API_KEY,
  TMDBBaseURL: TMDB_BASE_URL,
  TMDBLanguage: TMDB_LANGUAGE,
})

export default envConfig
