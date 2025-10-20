# 🔐 Environment Variables Configuration

## Overview

This document contains example `.env` configurations for both frontend and backend. These files should **NEVER** be committed to git and should be in your `.gitignore`.

---

## 📦 Backend Environment Variables

### File Location

```
softbuses-backend/.env
```

### Example Configuration

```env
# =============================================================================
# EMAIL CONFIGURATION (SMTP)
# =============================================================================

# SMTP Server Settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

# Email Credentials
SMTP_USER=your-company-email@gmail.com
SMTP_PASS=your-app-specific-password

# Notes:
# - For Gmail: Enable 2FA and generate an App Password
# - Admin emails will be sent TO this address
# - Confirmation emails will be sent FROM this address


# =============================================================================
# CLOUDFLARE TURNSTILE (Security)
# =============================================================================

# Turnstile Secret Key (Server-side)
TURNSTILE_SECRET_KEY=0x4AAAAAAxxxxxxxxxxxxxxxxxxxxx

# Notes:
# - Get from: https://dash.cloudflare.com/
# - This is the SECRET key, not the site key
# - Never expose this in frontend code


# =============================================================================
# SERVER CONFIGURATION
# =============================================================================

# Server Port (optional, defaults to 4000)
PORT=4000

# Notes:
# - Change if port 4000 is already in use
# - Update VITE_API_URL in frontend if you change this
```

---

## 💻 Frontend Environment Variables

### File Location

```
softbuses/.env
```

### Example Configuration

```env
# =============================================================================
# BACKEND API CONFIGURATION
# =============================================================================

# Backend API URL
# Development:
VITE_API_URL=http://localhost:4000

# Production (uncomment for production build):
# VITE_API_URL=https://your-backend-domain.com

# Notes:
# - Must NOT have trailing slash
# - Update before production deployment
# - This should point to your deployed backend


# =============================================================================
# CLOUDFLARE TURNSTILE (Security)
# =============================================================================

# Turnstile Site Key (Client-side)
VITE_TURNSTILE_SITE_KEY=0x4AAAAAAxxxxxxxxxxxxxxxxxxxxx

# Notes:
# - Get from: https://dash.cloudflare.com/
# - This is the SITE key (public), not the secret key
# - This is safe to expose in frontend code
# - Must match the domain configured in Cloudflare dashboard
```

---

## 📧 Email Provider Configurations

### Gmail (Recommended for Testing)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=yourname@gmail.com
SMTP_PASS=your-16-char-app-password
```

**Setup Steps:**

1. Go to Google Account Settings
2. Security → 2-Step Verification (enable it)
3. Security → App Passwords
4. Generate password for "Mail"
5. Use the 16-character password in `SMTP_PASS`

**Limitations:**

- Max 500 emails per day
- Not recommended for production at scale

---

### SendGrid (Recommended for Production)

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Setup Steps:**

1. Create account at https://sendgrid.com
2. Go to Settings → API Keys
3. Create API Key with "Mail Send" permission
4. Use `apikey` as username
5. Use the generated key as password

**Benefits:**

- Free tier: 100 emails/day
- Professional tier: up to 100,000 emails/day
- Better deliverability
- Analytics dashboard

---

### Outlook/Office 365

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=yourname@outlook.com
SMTP_PASS=your-password
```

**Setup Steps:**

1. Use your Outlook email and password
2. If 2FA is enabled, generate app password
3. Go to Account Security → App Passwords

**Limitations:**

- Max 300 emails per day
- Better for business accounts

---

### AWS SES (Enterprise)

```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=YOUR-SMTP-USERNAME
SMTP_PASS=YOUR-SMTP-PASSWORD
```

**Setup Steps:**

1. Create AWS account
2. Verify your email/domain in SES
3. Create SMTP credentials
4. Request production access (starts in sandbox mode)

**Benefits:**

- Very high limits
- Pay-as-you-go pricing
- Excellent deliverability
- Good for large scale

---

## 🔐 Cloudflare Turnstile Configuration

### Getting Your Keys

1. **Visit Cloudflare Dashboard**

   ```
   https://dash.cloudflare.com/
   ```

2. **Navigate to Turnstile**

   - Left sidebar → Turnstile

3. **Add Site**

   - Click "Add Site"
   - Enter domain (or use `localhost` for development)
   - Widget Mode: Managed (recommended)
   - Select theme: Dark (matches your design)

4. **Copy Keys**
   - **Site Key** → Goes in frontend `.env` as `VITE_TURNSTILE_SITE_KEY`
   - **Secret Key** → Goes in backend `.env` as `TURNSTILE_SECRET_KEY`

### Development vs Production

**Development:**

```env
# Backend
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA

# Frontend
VITE_TURNSTILE_SITE_KEY=1x00000000000000000000AA
```

- Use test keys from Cloudflare
- Always passes validation
- Good for testing

**Production:**

```env
# Backend
TURNSTILE_SECRET_KEY=0x4AAABBBCCCDDDxxxxxxxxxxxxx

# Frontend
VITE_TURNSTILE_SITE_KEY=0x4AAABBBCCCDDDxxxxxxxxxxxxx
```

- Use real keys from your site
- Actual bot protection
- Must match domain configured in Cloudflare

---

## 🌍 Environment-Specific Configurations

### Development Environment

**Backend** (`softbuses-backend/.env`):

```env
# Development Settings
PORT=4000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=dev-test@gmail.com
SMTP_PASS=dev-app-password
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

**Frontend** (`softbuses/.env`):

```env
# Development Settings
VITE_API_URL=http://localhost:4000
VITE_TURNSTILE_SITE_KEY=1x00000000000000000000AA
```

---

### Production Environment

**Backend** (Set in hosting dashboard):

```env
# Production Settings
PORT=4000
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.xxxxxxxxxxxxxxxxxxxxx
TURNSTILE_SECRET_KEY=0x4AAABBBCCCxxxxxxxxxxxxx
```

**Frontend** (Set in hosting dashboard):

```env
# Production Settings
VITE_API_URL=https://api.softbuses.com
VITE_TURNSTILE_SITE_KEY=0x4AAABBBCCCxxxxxxxxxxxxx
```

---

## 🔒 Security Best Practices

### DO ✅

1. **Use `.gitignore`**

   ```gitignore
   # Environment variables
   .env
   .env.local
   .env.production
   ```

2. **Use different keys for dev/prod**

   - Test keys for development
   - Real keys for production

3. **Rotate credentials regularly**

   - Change passwords quarterly
   - Regenerate API keys annually

4. **Use environment variables in hosting dashboard**

   - Vercel: Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
   - Heroku: Settings → Config Vars

5. **Store backup of production variables securely**
   - Use password manager (1Password, LastPass)
   - Encrypted document
   - Secure notes

### DON'T ❌

1. **Never commit `.env` files to git**
2. **Never hardcode credentials in code**
3. **Never share credentials in plain text**
4. **Never use production keys in development**
5. **Never expose backend secret keys in frontend**

---

## 🧪 Testing Your Configuration

### Backend Test

```bash
cd softbuses-backend

# Check if .env is loaded
node -e "require('dotenv').config(); console.log('SMTP_USER:', process.env.SMTP_USER)"

# Should output your email address
```

### Frontend Test

```bash
cd softbuses

# Start dev server
npm run dev

# Check browser console (F12)
# Should NOT see errors about missing environment variables
```

### Complete Test

1. Start backend: `cd softbuses-backend && npm run dev`
2. Start frontend: `cd softbuses && npm run dev`
3. Visit careers page
4. Submit test application
5. Check email inbox

---

## 📋 Quick Reference

### Backend Required Variables

| Variable               | Example        | Source                       |
| ---------------------- | -------------- | ---------------------------- |
| `SMTP_HOST`            | smtp.gmail.com | Email provider               |
| `SMTP_PORT`            | 587            | Email provider (usually 587) |
| `SMTP_USER`            | you@gmail.com  | Your email address           |
| `SMTP_PASS`            | app-password   | Email app password           |
| `TURNSTILE_SECRET_KEY` | 0x4AA...       | Cloudflare dashboard         |

### Frontend Required Variables

| Variable                  | Example               | Source               |
| ------------------------- | --------------------- | -------------------- |
| `VITE_API_URL`            | http://localhost:4000 | Your backend URL     |
| `VITE_TURNSTILE_SITE_KEY` | 0x4AA...              | Cloudflare dashboard |

---

## 🆘 Troubleshooting

### Issue: "Cannot send email"

**Check:**

- `SMTP_HOST` is correct
- `SMTP_PORT` is correct (587 for TLS)
- `SMTP_USER` and `SMTP_PASS` are valid
- Email provider allows SMTP access
- Gmail: App password generated (not regular password)

### Issue: "Turnstile verification failed"

**Check:**

- `TURNSTILE_SECRET_KEY` matches `VITE_TURNSTILE_SITE_KEY`
- Keys are from same site in Cloudflare dashboard
- Using production keys (not test keys) in production
- Domain matches configured domain in Cloudflare

### Issue: "Cannot connect to backend"

**Check:**

- Backend is running
- `VITE_API_URL` is correct
- No trailing slash in URL
- CORS is configured to allow frontend domain
- Backend port matches URL port

---

## 📝 Template Files

### Create `.env.example` (Safe to commit)

**Backend** (`softbuses-backend/.env.example`):

```env
# Copy this file to .env and fill in your actual values

SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
TURNSTILE_SECRET_KEY=
PORT=4000
```

**Frontend** (`softbuses/.env.example`):

```env
# Copy this file to .env and fill in your actual values

VITE_API_URL=
VITE_TURNSTILE_SITE_KEY=
```

---

## ✅ Verification Checklist

Before deploying, verify:

- [ ] All required environment variables are set
- [ ] `.env` files are in `.gitignore`
- [ ] Backend can load environment variables
- [ ] Frontend can access VITE\_\* variables
- [ ] Email credentials are correct and tested
- [ ] Turnstile keys match and are valid
- [ ] Production URLs are correct (no localhost)
- [ ] All sensitive data is secured

---

**Important:** After setting up your environment variables, restart both backend and frontend servers for changes to take effect!
