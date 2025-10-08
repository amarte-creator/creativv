import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { file: string } }
) {
  try {
    const fileName = params.file

    // Security: Whitelist allowed files
    const allowedFiles = [
      'n8n-workflows-templates.json',
      'checklist-bi-readiness.pdf',
      'guia-completa-automatizacion-n8n.pdf',
      'ebook-50-procesos-automatizar.pdf'
    ]

    if (!allowedFiles.includes(fileName)) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      )
    }

    // Build file path
    const filePath = path.join(process.cwd(), 'public', 'recursos', fileName)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      )
    }

    // Read file
    const fileBuffer = fs.readFileSync(filePath)

    // Determine content type
    const contentType = fileName.endsWith('.json')
      ? 'application/json'
      : fileName.endsWith('.pdf')
      ? 'application/pdf'
      : fileName.endsWith('.md')
      ? 'text/markdown'
      : 'application/octet-stream'

    // Return file
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': fileBuffer.length.toString()
      }
    })

  } catch (error) {
    console.error('Download file error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

