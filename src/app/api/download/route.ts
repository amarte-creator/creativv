import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, resourceTitle, resourceType, resourceFile } = body

    // Validate input
    if (!email || !name || !resourceTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log download (in production, save to database)
    console.log('Download request:', {
      email,
      name,
      resourceTitle,
      resourceType,
      resourceFile,
      timestamp: new Date().toISOString()
    })

    // TODO: In production, add to email marketing list (Mailchimp, SendGrid, etc.)
    // Example:
    // await addToMailingList(email, name, resourceTitle)

    // TODO: Send welcome email with download link
    // Example:
    // await sendWelcomeEmail(email, name, resourceFile)

    return NextResponse.json({
      success: true,
      message: 'Download registered successfully'
    })

  } catch (error) {
    console.error('Download API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper function to add to mailing list (implement based on your email provider)
// async function addToMailingList(email: string, name: string, resource: string) {
//   // Mailchimp example:
//   // const response = await fetch(`https://us1.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
//   //   method: 'POST',
//   //   headers: {
//   //     'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
//   //     'Content-Type': 'application/json'
//   //   },
//   //   body: JSON.stringify({
//   //     email_address: email,
//   //     status: 'subscribed',
//   //     merge_fields: {
//   //       FNAME: name.split(' ')[0],
//   //       LNAME: name.split(' ').slice(1).join(' '),
//   //     },
//   //     tags: [resource]
//   //   })
//   // })
// }

