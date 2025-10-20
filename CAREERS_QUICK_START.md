# Careers Page Quick Start Guide

## 🚀 Quick Start (Development)

### 1. Backend Setup

```bash
# Navigate to backend directory
cd softbuses-backend

# Install dependencies (if not already done)
npm install

# Create .env file with these variables:
# SMTP_HOST=your_smtp_host
# SMTP_PORT=587
# SMTP_USER=your_email@domain.com
# SMTP_PASS=your_email_password
# TURNSTILE_SECRET_KEY=your_turnstile_secret_key
# PORT=4000

# Start the backend server
npm run dev
```

Backend will run on: `http://localhost:4000`

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd softbuses

# Install dependencies (if not already done)
npm install

# Create .env file with these variables:
# VITE_API_URL=http://localhost:4000
# VITE_TURNSTILE_SITE_KEY=your_turnstile_site_key

# Start the frontend dev server
npm run dev
```

Frontend will run on: `http://localhost:5173` (or similar)

### 3. Test the Careers Page

1. Open browser to `http://localhost:5173`
2. Navigate to the Careers page
3. Click on any job listing
4. Click "Apply for this Position"
5. Fill out the form:
   - Enter your name, email, phone
   - (Optional) Add LinkedIn and portfolio URLs
   - Upload a resume (PDF, DOC, or DOCX under 5MB)
   - Write a cover letter
   - Complete the Turnstile verification
6. Click "Submit Application"

### 4. Verify Functionality

✅ **Check Admin Email**: You should receive an email with:

- Application details
- Resume attached
- Cover letter
- Applicant information

✅ **Check Applicant Email**: The applicant should receive:

- Confirmation email
- Application summary
- Next steps information

---

## 🧪 Testing Without Email

If you want to test without email setup:

1. Comment out email sending in `softbuses-backend/src/routes/careerApplication.ts`
2. Add console.log to see the data:

```typescript
// Comment out this line:
// await Promise.all([...]);

// Add this instead:
console.log("Application received:", {
	name,
	email,
	phone,
	jobTitle,
	resumeFile: req.file?.originalname,
});
```

---

## 🔑 Getting Cloudflare Turnstile Keys (Free)

1. Go to: https://dash.cloudflare.com/
2. Sign up or log in
3. Select "Turnstile" from the left sidebar
4. Click "Add Site"
5. Enter your domain (or use `localhost` for development)
6. Copy the **Site Key** → Use in frontend `.env` as `VITE_TURNSTILE_SITE_KEY`
7. Copy the **Secret Key** → Use in backend `.env` as `TURNSTILE_SECRET_KEY`

---

## 📧 Email Configuration Examples

### Gmail (with App Password)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
```

**Note**: You need to enable 2FA and create an App Password in Gmail settings.

### SendGrid

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Outlook

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

---

## ✅ Verification Checklist

Before going live, verify:

- [ ] Backend is running and accessible
- [ ] Frontend is running and can connect to backend
- [ ] Environment variables are set correctly (both frontend and backend)
- [ ] SMTP credentials are working (test by sending an application)
- [ ] Turnstile keys are valid and working
- [ ] File upload works (try different file types and sizes)
- [ ] Both emails are received (admin and applicant)
- [ ] Error handling works (try submitting without required fields)
- [ ] Security verification is required (Turnstile)

---

## 🎯 Available Job Positions

The careers page includes 8 pre-configured positions:

1. **Senior Full-Stack Developer** (Engineering)
2. **AI/ML Engineer** (AI & Machine Learning)
3. **UI/UX Designer** (Design)
4. **DevOps Engineer** (Engineering)
5. **Mobile App Developer** (Engineering)
6. **Data Scientist** (Data Science)
7. **Product Manager** (Product Management)
8. **QA Engineer** (Engineering)

All positions are remote and full-time. You can modify these in:
`softbuses/src/assets/careersData/jobOpenings.js`

---

## 🚨 Troubleshooting

### Backend Issues

**Port already in use:**

```bash
# Change PORT in .env file or kill the process
# Windows:
netstat -ano | findstr :4000
taskkill /PID <PID> /F
```

**TypeScript errors:**

```bash
# Rebuild
npm run build
```

### Frontend Issues

**API connection error:**

- Verify `VITE_API_URL` in `.env`
- Check if backend is running
- Check browser console for CORS errors

**Turnstile not loading:**

- Verify `VITE_TURNSTILE_SITE_KEY` is set
- Check browser console for errors
- Ensure internet connection is stable

---

## 📱 API Testing (Postman/Insomnia)

Use this to test the backend directly:

**Endpoint:** `POST http://localhost:4000/api/career-application`

**Headers:**

- Content-Type: `multipart/form-data`

**Body (form-data):**

- name: "John Doe"
- email: "john@example.com"
- phone: "+1234567890"
- linkedin: "https://linkedin.com/in/johndoe"
- portfolio: "https://johndoe.com"
- coverLetter: "I am very interested in this position..."
- jobTitle: "Senior Full-Stack Developer"
- jobId: "1"
- jobDepartment: "Engineering"
- turnstileToken: "0.DUMMY_TOKEN_FOR_TESTING" (you can temporarily bypass this in dev)
- resume: [select a PDF/DOC/DOCX file]

---

## 🎨 Customization

### Change Email Templates

Edit the HTML in:

- `softbuses-backend/src/routes/careerApplication.ts`
- Look for `adminMailOptions` and `applicantMailOptions`

### Add More Job Positions

Edit:

- `softbuses/src/assets/careersData/jobOpenings.js`

### Modify Form Fields

Edit:

- `softbuses/src/components/careersPage/JobDetail.jsx`
- Update `formData` state and form JSX

### Change File Upload Limits

Edit in backend:

- `softbuses-backend/src/routes/careerApplication.ts`
- Modify `multer` configuration (currently 5MB)

---

## 🌟 Production Deployment

### Backend (Vercel/Heroku/Railway)

1. Push code to GitHub
2. Connect repository to hosting service
3. Set environment variables
4. Deploy!

### Frontend (Vercel/Netlify/Cloudflare Pages)

1. Update `VITE_API_URL` to production backend URL
2. Build: `npm run build`
3. Deploy `dist` folder

**Important:** Update Turnstile site configuration to include your production domain!

---

## 🆘 Need Help?

1. Check the full documentation: `CAREERS_INTEGRATION_GUIDE.md`
2. Review backend logs for errors
3. Check browser console for frontend errors
4. Verify all environment variables are set correctly
5. Test with a simple curl command to isolate frontend/backend issues

---

## ✨ You're All Set!

Your careers page is now ready to accept applications! 🎉

Navigate to the careers page, apply for a position, and watch the magic happen! ✉️
