# 🔄 Careers Page Data Flow

## Complete System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           FRONTEND (React + Vite)                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  1. User visits Careers Page                                             │
│     └─> JobListings.jsx displays 8 job positions                        │
│     └─> User clicks on a job card                                       │
│                                                                           │
│  2. JobDetail Modal Opens                                                │
│     └─> Shows job description, requirements, responsibilities           │
│     └─> User clicks "Apply for this Position"                          │
│                                                                           │
│  3. Application Form Displays                                            │
│     ├─> Name (required)                                                 │
│     ├─> Email (required)                                                │
│     ├─> Phone (required)                                                │
│     ├─> LinkedIn (optional)                                             │
│     ├─> Portfolio (optional)                                            │
│     ├─> Resume Upload (required, PDF/DOC/DOCX, max 5MB)                │
│     ├─> Cover Letter (required, textarea)                              │
│     └─> Cloudflare Turnstile Widget (required)                         │
│                                                                           │
│  4. User Fills Form and Clicks Submit                                    │
│     └─> Frontend Validation                                             │
│         ├─> Check required fields                                       │
│         ├─> Validate file type and size                                │
│         └─> Ensure Turnstile is completed                              │
│                                                                           │
│  5. API Call Preparation                                                 │
│     └─> src/api/careerApplication.js                                    │
│         ├─> Create FormData object                                      │
│         ├─> Append all form fields                                      │
│         ├─> Append resume file                                          │
│         ├─> Append job details (title, id, department)                 │
│         └─> Append turnstileToken                                       │
│                                                                           │
│  6. POST Request to Backend                                              │
│     └─> URL: {VITE_API_URL}/api/career-application                     │
│     └─> Content-Type: multipart/form-data                              │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                                    ↓  HTTPS Request
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│                      BACKEND (Express + TypeScript)                      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  7. Request Received at Backend                                          │
│     └─> server.ts → routes/index.ts → routes/careerApplication.ts      │
│                                                                           │
│  8. Multer Middleware Processing                                         │
│     ├─> Parse multipart/form-data                                       │
│     ├─> Extract file (resume)                                           │
│     ├─> Validate file type (PDF/DOC/DOCX only)                         │
│     ├─> Validate file size (max 5MB)                                   │
│     └─> Store file in memory (buffer)                                  │
│                                                                           │
│  9. Request Body Validation                                              │
│     ├─> Check required fields (name, email, phone, coverLetter, etc.)  │
│     ├─> Verify file was uploaded                                        │
│     └─> Check Turnstile token exists                                   │
│                                                                           │
│  10. Cloudflare Turnstile Verification                                   │
│      └─> utils/turnstile.ts                                             │
│          ├─> Send token to Cloudflare API                              │
│          ├─> Verify response                                            │
│          └─> Return success/failure                                     │
│                                                                           │
│  11. Email Preparation                                                   │
│      A) Admin Email                                                      │
│         ├─> Subject: "New Job Application: {jobTitle} - {name}"        │
│         ├─> HTML Body: Professional template with gradient header      │
│         │   ├─> Position applied for (highlighted)                     │
│         │   ├─> Applicant details table                                │
│         │   ├─> Cover letter (full text)                               │
│         │   ├─> Resume attachment info                                 │
│         │   └─> Timestamp                                              │
│         ├─> Attachment: Resume file from memory buffer                 │
│         └─> To: {SMTP_USER}                                            │
│                                                                           │
│      B) Applicant Confirmation Email                                     │
│         ├─> Subject: "Application Received - {jobTitle} at SoftBuses"  │
│         ├─> HTML Body: Professional template                           │
│         │   ├─> Personalized greeting                                  │
│         │   ├─> Thank you message                                      │
│         │   ├─> Application summary                                    │
│         │   ├─> "What's Next?" section                                 │
│         │   └─> Contact information                                    │
│         └─> To: {applicant email}                                      │
│                                                                           │
│  12. Send Emails via Nodemailer                                          │
│      └─> config/nodemailer.ts                                           │
│          ├─> Use SMTP credentials from .env                            │
│          ├─> Send both emails simultaneously (Promise.all)             │
│          └─> Wait for completion                                       │
│                                                                           │
│  13. Response Sent to Frontend                                           │
│      ├─> Success (200): { success: true, message: "Application..." }   │
│      └─> Error (400/500): { success: false, message: "Error..." }      │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                                    ↓  JSON Response
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND                                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  14. Response Handling                                                   │
│      ├─> Parse JSON response                                            │
│      ├─> Update submitStatus state                                      │
│      └─> Update isSubmitting state (false)                             │
│                                                                           │
│  15. UI Updates                                                          │
│      A) Success:                                                         │
│         ├─> Show success message (green border/text)                   │
│         ├─> Display: "Application submitted successfully!"             │
│         ├─> Wait 2 seconds                                              │
│         └─> Close modal automatically                                   │
│                                                                           │
│      B) Error:                                                           │
│         ├─> Show error message (red border/text)                       │
│         ├─> Display specific error from backend                        │
│         └─> Keep form open for retry                                   │
│                                                                           │
│  16. User Experience Completion                                          │
│      └─> User sees confirmation                                         │
│      └─> Modal closes                                                   │
│      └─> User returns to job listings                                  │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│                          EMAIL DELIVERY                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  17. Email Service (SMTP)                                                │
│      ├─> Receives emails from Nodemailer                               │
│      ├─> Delivers to recipients                                         │
│      │                                                                   │
│      A) Admin receives:                                                  │
│         ├─> Email with application details                              │
│         ├─> Resume file attached (original filename)                   │
│         └─> All applicant information                                  │
│      │                                                                   │
│      B) Applicant receives:                                              │
│         ├─> Confirmation email                                          │
│         ├─> Application summary                                         │
│         └─> Next steps information                                     │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🔐 Security Flow

```
┌──────────────┐
│   Browser    │  User completes Turnstile widget
└──────┬───────┘
       │
       ├─> Cloudflare Turnstile generates token
       │
       ↓
┌──────────────┐
│   Frontend   │  Token included in form submission
└──────┬───────┘
       │
       ├─> Token sent with FormData
       │
       ↓
┌──────────────┐
│   Backend    │  Verify token with Cloudflare
└──────┬───────┘
       │
       ├─> POST to Cloudflare API
       │
       ↓
┌──────────────┐
│  Cloudflare  │  Validates token
└──────┬───────┘
       │
       ├─> Returns success: true/false
       │
       ↓
┌──────────────┐
│   Backend    │  Proceeds if valid, rejects if invalid
└──────────────┘
```

---

## 📁 File Upload Flow

```
User selects file (.pdf/.doc/.docx)
       │
       ├─> Frontend validation (type, size)
       │
       ↓
File added to FormData
       │
       ├─> Sent as multipart/form-data
       │
       ↓
Multer middleware intercepts
       │
       ├─> Validates MIME type
       ├─> Checks file size (5MB limit)
       ├─> Stores in memory buffer
       │
       ↓
File available in req.file
       │
       ├─> { buffer, originalname, mimetype, size }
       │
       ↓
Attached to email
       │
       ├─> { filename, content: buffer, contentType }
       │
       ↓
Sent via Nodemailer to admin
```

---

## 🔄 State Management Flow (Frontend)

```
Initial State:
├─> showApplicationForm: false
├─> isSubmitting: false
├─> submitStatus: null
├─> turnstileToken: ""
└─> formData: { name: "", email: "", ... }

User clicks "Apply":
└─> showApplicationForm: true

User fills form:
└─> formData updates on each input change

Turnstile completes:
└─> turnstileToken: "abc123..."

User clicks "Submit":
├─> isSubmitting: true
└─> submitStatus: null

Backend responds:
├─> isSubmitting: false
└─> submitStatus: { type: "success", message: "..." }
    OR
    submitStatus: { type: "error", message: "..." }

On success (after 2s):
└─> Modal closes (onClose called)
```

---

## 📊 Data Structure

### FormData Sent to Backend

```javascript
{
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  linkedin: "https://linkedin.com/in/johndoe",
  portfolio: "https://johndoe.dev",
  coverLetter: "I am excited to apply...",
  jobTitle: "Senior Full-Stack Developer",
  jobId: "1",
  jobDepartment: "Engineering",
  turnstileToken: "0.ABC123XYZ...",
  resume: File { /* binary data */ }
}
```

### Email Template Data

```javascript
{
  // Shared
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",

  // Job Info
  jobTitle: "Senior Full-Stack Developer",
  jobDepartment: "Engineering",
  jobId: 1,

  // Application Details
  linkedin: "https://linkedin.com/in/johndoe",
  portfolio: "https://johndoe.dev",
  coverLetter: "Full text here...",

  // File Info
  resume: {
    filename: "john-doe-resume.pdf",
    buffer: <Buffer...>,
    mimetype: "application/pdf",
    size: 245678
  },

  // Metadata
  timestamp: "10/20/2025, 3:45:23 PM"
}
```

---

## 🎯 Error Handling Flow

```
Error Occurs
    │
    ├─> Frontend catches error
    │   ├─> Display user-friendly message
    │   ├─> Keep form open
    │   └─> Log to console (dev mode)
    │
    └─> Backend catches error
        ├─> Log full error to server console
        ├─> Determine error type:
        │   ├─> Validation → 400 status
        │   ├─> File error → 400 status
        │   └─> Server error → 500 status
        └─> Return JSON: { success: false, message: "..." }
```

---

## 📱 Responsive Design Flow

```
Desktop (>768px):
├─> Two-column form layout
├─> Larger modal
├─> Side-by-side buttons
└─> Full Turnstile widget

Mobile (<768px):
├─> Single-column form layout
├─> Full-width modal
├─> Stacked buttons
└─> Compact Turnstile widget
```

---

## ⚡ Performance Considerations

1. **File Handling**: Memory storage (faster than disk)
2. **Email Sending**: Parallel dispatch (Promise.all)
3. **Form Validation**: Client-side first (reduces server load)
4. **Lazy Loading**: Modal only renders when opened
5. **Turnstile**: Async loading (doesn't block page load)

---

## 🔄 Complete Request/Response Cycle

```
[1] User action: Click "Submit Application"
    ↓ ~0ms
[2] Frontend: Validate form
    ↓ ~10ms
[3] Frontend: Create FormData
    ↓ ~20ms
[4] Frontend: POST to backend
    ↓ ~100-500ms (network)
[5] Backend: Receive request
    ↓ ~10ms
[6] Backend: Multer parse
    ↓ ~50ms
[7] Backend: Validate data
    ↓ ~10ms
[8] Backend: Verify Turnstile
    ↓ ~200-500ms (Cloudflare API)
[9] Backend: Send emails
    ↓ ~1000-3000ms (SMTP)
[10] Backend: Return response
     ↓ ~100-500ms (network)
[11] Frontend: Update UI
     ↓ ~50ms
[12] User sees: Success message
     ↓ 2000ms delay
[13] Modal closes automatically

Total time: ~2-5 seconds
```

---

This data flow document illustrates every step of the careers page functionality, from user interaction to email delivery. The system is designed to be robust, secure, and user-friendly while providing a professional experience for both applicants and administrators.
