import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation'
import { sendContactEmail } from '@/lib/email'
import { rateLimit, getClientIdentifier } from '@/lib/rateLimit'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const identifier = getClientIdentifier(request)
    const rateLimitResult = rateLimit(identifier, {
      maxRequests: 3,
      windowMs: 10 * 60 * 1000, // 10 minutes
    })

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          resetAt: new Date(rateLimitResult.resetAt).toISOString(),
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()

    // Honeypot check - if filled, it's likely a bot
    if (body.honeypot && body.honeypot.length > 0) {
      // Silently fail for bots
      return NextResponse.json(
        { message: 'Thank you for your message!' },
        { status: 200 }
      )
    }

    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Prepare metadata
    const metadata = {
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || undefined,
      ip: identifier,
      referrer: request.headers.get('referer') || undefined,
    }

    // Send email
    const emailResult = await sendContactEmail(data, metadata)

    if (!emailResult.success) {
      console.error('Failed to send email:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    // Success response
    return NextResponse.json(
      {
        message: 'Thank you for your message! We will get back to you soon.',
        remaining: rateLimitResult.remaining,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

// OPTIONS method for CORS preflight (if needed)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}



