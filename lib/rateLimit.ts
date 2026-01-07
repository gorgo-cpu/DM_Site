/**
 * Simple in-memory rate limiter
 * 
 * PRODUCTION NOTE: For production deployments with multiple instances,
 * consider upgrading to a distributed solution like:
 * - Upstash Redis (https://upstash.com)
 * - Vercel KV (https://vercel.com/storage/kv)
 * - Redis Cloud
 */

interface RateLimitEntry {
  count: number
  resetAt: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetAt) {
      rateLimitMap.delete(key)
    }
  }
}, 10 * 60 * 1000)

export interface RateLimitConfig {
  maxRequests: number
  windowMs: number
}

export interface RateLimitResult {
  success: boolean
  remaining: number
  resetAt: number
}

export function rateLimit(
  identifier: string,
  config: RateLimitConfig = { maxRequests: 3, windowMs: 10 * 60 * 1000 }
): RateLimitResult {
  const now = Date.now()
  const entry = rateLimitMap.get(identifier)

  // No existing entry or window expired
  if (!entry || now > entry.resetAt) {
    const resetAt = now + config.windowMs
    rateLimitMap.set(identifier, { count: 1, resetAt })
    return {
      success: true,
      remaining: config.maxRequests - 1,
      resetAt,
    }
  }

  // Within window, check if limit exceeded
  if (entry.count >= config.maxRequests) {
    return {
      success: false,
      remaining: 0,
      resetAt: entry.resetAt,
    }
  }

  // Increment count
  entry.count++
  rateLimitMap.set(identifier, entry)

  return {
    success: true,
    remaining: config.maxRequests - entry.count,
    resetAt: entry.resetAt,
  }
}

export function getClientIdentifier(request: Request): string {
  // Try to get IP from various headers
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const cfConnectingIp = request.headers.get('cf-connecting-ip')

  const ip = cfConnectingIp || realIp || forwarded?.split(',')[0] || 'unknown'
  return ip.trim()
}

