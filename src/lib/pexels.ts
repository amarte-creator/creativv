export interface PexelsPhotoSrc {
  original: string
  large2x: string
  large: string
  medium: string
  small: string
  portrait: string
  landscape: string
  tiny: string
}

export interface PexelsPhoto {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string | null
  src: PexelsPhotoSrc
  liked: boolean
  alt: string
}

export interface PexelsSearchResponse {
  total_results: number
  page: number
  per_page: number
  photos: PexelsPhoto[]
  next_page?: string
  prev_page?: string
}

const PEXELS_BASE_URL = 'https://api.pexels.com/v1'

function getApiKey(): string {
  const apiKey = process.env.PEXELS_API_KEY
  if (!apiKey) {
    throw new Error('PEXELS_API_KEY is not set')
  }
  return apiKey
}

export async function searchPexelsPhotos(params: {
  query: string
  perPage?: number
  page?: number
  orientation?: 'landscape' | 'portrait' | 'square'
  size?: 'large' | 'medium' | 'small'
  color?: string
}): Promise<PexelsSearchResponse> {
  const { query, perPage = 15, page = 1, orientation, size, color } = params

  const url = new URL(`${PEXELS_BASE_URL}/search`)
  url.searchParams.set('query', query)
  url.searchParams.set('per_page', String(perPage))
  url.searchParams.set('page', String(page))
  if (orientation) url.searchParams.set('orientation', orientation)
  if (size) url.searchParams.set('size', size)
  if (color) url.searchParams.set('color', color)

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      Authorization: getApiKey(),
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Pexels API error ${response.status}: ${text}`)
  }

  const json = (await response.json()) as PexelsSearchResponse
  return json
}


