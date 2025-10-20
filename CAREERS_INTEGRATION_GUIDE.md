# Careers Page - Complete Integration Guide

## 🎯 Overview

This document provides a complete guide for the careers page functionality with full frontend-backend integration, including job applications with file uploads and email notifications.

## 📋 Table of Contents

1. [Features](#features)
2. [Architecture](#architecture)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Environment Variables](#environment-variables)
6. [API Documentation](#api-documentation)
7. [Testing](#testing)
8. [Security](#security)

---

## ✨ Features

### Complete Job Application System

- **File Upload**: Resume/CV upload (PDF, DOC, DOCX) with 5MB limit
- **Form Validation**: Client-side and server-side validation
- **Security**: Cloudflare Turnstile integration for bot protection
- **Email Notifications**:
  - Admin receives application with resume attachment
  - Applicant receives confirmation email
- **Professional UI**: Modal-based application form with real-time feedback
- **Error Handling**: Comprehensive error messages and loading states

### Job Listings

- 8 pre-configured positions across multiple departments
- Department-based filtering
- Expandable job details modal
- Responsive design

---

## 🏗️ Architecture

### Backend Stack

- **Framework**: Express.js with TypeScript
- **File Upload**: Multer (memory storage)
- **Email**: Nodemailer with HTML templates
- **Security**: Cloudflare Turnstile verification

### Frontend Stack

- **Framework**: React with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Security**: @marsidev/react-turnstile

### Data Flow

```
User fills form → Turnstile verification → FormData with file →
Backend validates → Sends emails (with attachment) → Success response
```

---

## 🔧 Backend Setup

### 1. Install Dependencies

```bash
cd softbuses-backend
npm install multer @types/multer
```

### 2. Files Created/Modified

#### New Files:

- `src/routes/careerApplication.ts` - Career application route handler

#### Modified Files:

- `src/routes/index.ts` - Added career application route

### 3. Route Details

**Endpoint**: `POST /api/career-application`

**Request Type**: `multipart/form-data`

**Request Body**:

```javascript
{
  name: string (required)
  email: string (required)
  phone: string (required)
  linkedin: string (optional)
  portfolio: string (optional)
  coverLetter: string (required)
  jobTitle: string (required)
  jobId: number (required)
  jobDepartment: string (required)
  turnstileToken: string (required)
  resume: File (required - .pdf, .doc, .docx, max 5MB)
}
```

**Response (Success - 200)**:

```json
{
	"success": true,
	"message": "Application submitted successfully! We'll be in touch soon."
}
```

**Response (Error - 400/500)**:

```json
{
	"success": false,
	"message": "Error message here"
}
```

### 4. Email Templates

#### Admin Email Features:

- Job position highlighted
- Complete applicant details
- Cover letter
- Resume attached
- Timestamp

#### Applicant Confirmation Email Features:

- Personalized greeting
- Application summary
- Next steps information
- Contact information
- Professional design

---

## 💻 Frontend Setup

### 1. Files Created/Modified

#### New Files:

- `src/api/careerApplication.js` - API helper for career applications

#### Modified Files:

- `src/components/careersPage/JobDetail.jsx` - Added full backend integration

### 2. Component Features

#### JobDetail Component Updates:

**State Management**:

```javascript
- formData: Stores all form inputs
- isSubmitting: Loading state
- submitStatus: Success/error messages
- turnstileToken: Security verification token
- showApplicationForm: Toggle between job details and form
```

**Form Validation**:

- Required fields: name, email, phone, resume, cover letter
- File type validation: .pdf, .doc, .docx only
- File size limit: 5MB
- Turnstile verification required

**User Feedback**:

- Loading states on submit button
- Success/error messages with color coding
- Disabled inputs during submission
- Auto-close modal on success (2 second delay)

### 3. API Integration

The `submitCareerApplication` function handles:

- FormData creation for file upload
- Proper content type headers (automatic with FormData)
- Error handling and parsing
- Response validation

---

## 🔐 Environment Variables

### Backend (.env)

```env
# Email Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@domain.com
SMTP_PASS=your_email_password

# Cloudflare Turnstile
TURNSTILE_SECRET_KEY=your_turnstile_secret_key

# Server
PORT=4000
```

### Frontend (.env)

```env
# Backend API URL
VITE_API_URL=http://localhost:4000

# Cloudflare Turnstile
VITE_TURNSTILE_SITE_KEY=your_turnstile_site_key
```

---

## 📡 API Documentation

### Career Application Endpoint

**URL**: `/api/career-application`  
**Method**: `POST`  
**Content-Type**: `multipart/form-data`

#### Request Parameters

| Parameter      | Type   | Required | Description                     |
| -------------- | ------ | -------- | ------------------------------- |
| name           | string | Yes      | Applicant's full name           |
| email          | string | Yes      | Applicant's email address       |
| phone          | string | Yes      | Applicant's phone number        |
| linkedin       | string | No       | LinkedIn profile URL            |
| portfolio      | string | No       | Portfolio/website URL           |
| coverLetter    | string | Yes      | Cover letter text               |
| jobTitle       | string | Yes      | Job position title              |
| jobId          | number | Yes      | Job position ID                 |
| jobDepartment  | string | Yes      | Department name                 |
| turnstileToken | string | Yes      | Turnstile verification token    |
| resume         | File   | Yes      | Resume file (.pdf, .doc, .docx) |

#### Response Codes

| Code | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 200  | Application submitted successfully                           |
| 400  | Bad request (validation error, missing fields, invalid file) |
| 500  | Server error                                                 |

#### Error Messages

- "Please fill in all required fields."
- "Please upload your resume."
- "Please complete the security verification."
- "Security verification failed. Please try again."
- "File size too large. Maximum size is 5MB."
- "Invalid file type. Only PDF, DOC, and DOCX are allowed."

---

## 🧪 Testing

### Manual Testing Checklist

#### Frontend:

- [ ] Form opens when clicking "Apply for this Position"
- [ ] All fields display correctly
- [ ] File upload accepts valid formats (.pdf, .doc, .docx)
- [ ] File upload rejects invalid formats
- [ ] Turnstile widget loads and verifies
- [ ] Submit button is disabled without Turnstile verification
- [ ] Loading state displays during submission
- [ ] Success message displays on successful submission
- [ ] Error messages display for validation errors
- [ ] Modal closes after successful submission
- [ ] "Back to Job Details" button works

#### Backend:

- [ ] Endpoint accepts multipart/form-data
- [ ] File size limit (5MB) is enforced
- [ ] File type validation works
- [ ] Turnstile verification is checked
- [ ] Admin email is sent with attachment
- [ ] Applicant confirmation email is sent
- [ ] Proper error responses for invalid data

### Testing with Postman/Thunder Client

```bash
# Use multipart/form-data with following fields:
name: "John Doe"
email: "john@example.com"
phone: "+1234567890"
linkedin: "https://linkedin.com/in/johndoe"
portfolio: "https://johndoe.com"
coverLetter: "I am excited about this opportunity..."
jobTitle: "Senior Full-Stack Developer"
jobId: 1
jobDepartment: "Engineering"
turnstileToken: "test_token_here"
resume: [select file]
```

---

## 🔒 Security

### Implemented Security Measures

1. **Cloudflare Turnstile**: Bot protection on every submission
2. **File Validation**:
   - Type checking (only PDF, DOC, DOCX)
   - Size limiting (5MB max)
   - Server-side validation
3. **Input Sanitization**: All inputs validated before processing
4. **CORS**: Configured to allow only specified origins
5. **Memory Storage**: Files are not stored on disk, reducing attack surface
6. **Email Validation**: Proper email format validation
7. **Error Handling**: Generic error messages to avoid information leakage

### Best Practices

- Never expose sensitive API keys in frontend code
- Use environment variables for all configuration
- Implement rate limiting on production (recommended)
- Use HTTPS in production
- Regularly update dependencies
- Monitor email sending limits

---

## 🚀 Deployment

### Backend Deployment

1. Ensure all environment variables are set
2. Build the TypeScript code:
   ```bash
   npm run build
   ```
3. Start the server:
   ```bash
   npm start
   ```

### Frontend Deployment

1. Update `VITE_API_URL` to your production backend URL
2. Build the application:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder to your hosting service

### Vercel Deployment (Backend)

The backend includes a `Procfile` for Heroku-style deployments. For Vercel:

1. Configure build command: `npm run build`
2. Configure start command: `npm start`
3. Set environment variables in Vercel dashboard

---

## 📝 Usage Example

### Frontend Implementation

```jsx
import { submitCareerApplication } from "../../api/careerApplication";

// In your component
const handleSubmit = async (e) => {
	e.preventDefault();

	const formDataToSend = new FormData();
	formDataToSend.append("name", formData.name);
	formDataToSend.append("email", formData.email);
	formDataToSend.append("phone", formData.phone);
	formDataToSend.append("linkedin", formData.linkedin);
	formDataToSend.append("portfolio", formData.portfolio);
	formDataToSend.append("coverLetter", formData.coverLetter);
	formDataToSend.append("jobTitle", job.title);
	formDataToSend.append("jobId", job.id);
	formDataToSend.append("jobDepartment", job.department);
	formDataToSend.append("turnstileToken", turnstileToken);
	formDataToSend.append("resume", formData.resume);

	try {
		const response = await submitCareerApplication(formDataToSend);
		console.log("Success:", response.message);
	} catch (error) {
		console.error("Error:", error.message);
	}
};
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: File upload fails with "File too large"  
**Solution**: Ensure file is under 5MB. Compress if necessary.

**Issue**: "Please complete the security verification"  
**Solution**: Wait for Turnstile widget to load and complete verification.

**Issue**: Email not sending  
**Solution**:

- Check SMTP credentials
- Verify email provider settings
- Check spam folder
- Review backend logs

**Issue**: CORS error  
**Solution**: Ensure backend CORS is configured to allow your frontend domain.

**Issue**: Turnstile not loading  
**Solution**:

- Check VITE_TURNSTILE_SITE_KEY is set correctly
- Verify internet connection
- Check browser console for errors

---

## 📞 Support

For issues or questions:

- Review this documentation
- Check backend logs
- Verify environment variables
- Test with simple curl/Postman requests first

---

## 🎉 Success!

Your careers page is now fully functional with:
✅ Job application form with file upload  
✅ Email notifications to admin and applicants  
✅ Security verification  
✅ Professional email templates  
✅ Error handling and validation  
✅ Responsive design  
✅ Loading states and user feedback

Users can now apply for jobs, and you'll receive applications directly in your email inbox!
