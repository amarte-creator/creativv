import { NextRequest, NextResponse } from 'next/server'
import { searchPexelsPhotos } from '@/lib/pexels'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query') || searchParams.get('q')
    if (!query) {
      return NextResponse.json({ error: 'Missing query parameter' }, { status: 400 })
    }

    const perPage = Number(searchParams.get('perPage') || searchParams.get('per_page') || 15)
    const page = Number(searchParams.get('page') || 1)
    const orientation = searchParams.get('orientation') as 'landscape' | 'portrait' | 'square' | null
    const size = searchParams.get('size') as 'large' | 'medium' | 'small' | null
    const color = searchParams.get('color')

    const data = await searchPexelsPhotos({
      query,
      perPage,
      page,
      orientation: orientation || undefined,
      size: size || undefined,
      color: color || undefined,
    })

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error('Pexels search error:', error)
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 })
  }
}


