# OYAK Anker Bank - Redirect Service

Secure redirect service for OYAK Anker Bank transactions and authentication flows.

## Overview

This service provides secure, rate-limited redirection for OYAK Anker Bank's authentication and transaction flows. It supports custom protocol redirects (e.g., `obs://`) with comprehensive security features.

## Features

- 🔐 **Secure Redirects**: Rate-limited and validated redirect endpoints
- 🛡️ **Security Headers**: Comprehensive security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- 📊 **Rate Limiting**: IP-based rate limiting (100 requests/60 seconds)
- ✅ **Input Validation**: Strict path validation with regex patterns
- 🚀 **Production Ready**: Vercel-deployed, fully optimized

## Getting Started

### Prerequisites

- Node.js >= 22.11.0
- npm >= 10.9.0

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build

```bash
npm run build
npm start
```

## API Endpoints

### Redirect Service

Redirect to custom protocol (e.g., `obs://`):

```
GET /r/<path>
```

**Example:**
```
https://obs-mobile.vercel.app/r/forgot-password/cb6841c9-8b7b-430e-8eab-e115b69388ea
```

**Response:**
```
HTTP/1.1 302 Found
Location: obs://forgot-password/cb6841c9-8b7b-430e-8eab-e115b69388ea
```

### Query Parameter Method

Alternative redirect using query parameter:

```
GET /api/redirect?path=<path>
```

**Example:**
```
https://obs-mobile.vercel.app/api/redirect?path=forgot-password/cb6841c9-8b7b-430e-8eab-e115b69388ea
```

## Security

- ✅ Rate limiting: 100 requests per 60 seconds per IP
- ✅ Input validation: Alphanumeric, dash, slash, and UUID patterns
- ✅ Path length limits: Maximum 500 characters
- ✅ Security headers: XSS, clickjacking, and MIME-sniffing protection
- ✅ Secrets management: All sensitive files in .gitignore

## Deployment

Deployed on Vercel. Environment variables are securely managed through Vercel's dashboard.

## License

Proprietary - OYAK Anker Bank
