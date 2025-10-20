# 🚀 Careers Page Deployment Checklist

## Pre-Deployment Checklist

Use this checklist to ensure everything is configured correctly before deploying to production.

---

## 📋 Backend Checklist

### Environment Variables

- [ ] `SMTP_HOST` configured
- [ ] `SMTP_PORT` configured (typically 587)
- [ ] `SMTP_USER` configured (email address)
- [ ] `SMTP_PASS` configured (email password/app password)
- [ ] `TURNSTILE_SECRET_KEY` configured (Cloudflare secret key)
- [ ] `PORT` configured (optional, defaults to 4000)

### Dependencies

- [ ] All npm packages installed (`npm install`)
- [ ] `multer` and `@types/multer` installed
- [ ] TypeScript compiled successfully (`npm run build`)
- [ ] No TypeScript errors

### Code Verification

- [ ] `src/routes/careerApplication.ts` exists and is error-free
- [ ] `src/routes/index.ts` includes career application route
- [ ] Email templates display correctly
- [ ] File upload limits are appropriate (currently 5MB)
- [ ] Allowed file types are correct (PDF, DOC, DOCX)

### Testing

- [ ] Test endpoint with Postman/Thunder Client
- [ ] Test file upload with valid file
- [ ] Test file upload with invalid file (should reject)
- [ ] Test file upload with oversized file (should reject)
- [ ] Test Turnstile verification
- [ ] Verify admin email is received
- [ ] Verify applicant confirmation email is received
- [ ] Check email attachments work correctly
- [ ] Test error responses (missing fields, invalid data)

### Security

- [ ] Turnstile verification is active (not bypassed)
- [ ] SMTP credentials are not exposed in code
- [ ] File type validation is working
- [ ] File size limits are enforced
- [ ] CORS is configured correctly
- [ ] Environment variables are secure

---

## 💻 Frontend Checklist

### Environment Variables

- [ ] `VITE_API_URL` points to production backend URL
- [ ] `VITE_TURNSTILE_SITE_KEY` configured (Cloudflare site key)
- [ ] `.env` file is **NOT** committed to git (should be in `.gitignore`)

### Dependencies

- [ ] All npm packages installed (`npm install`)
- [ ] `@marsidev/react-turnstile` is installed
- [ ] No build errors (`npm run build`)

### Code Verification

- [ ] `src/api/careerApplication.js` exists
- [ ] `src/components/careersPage/JobDetail.jsx` has latest changes
- [ ] Turnstile import is correct
- [ ] API endpoint URL is correct
- [ ] Form validation is working
- [ ] File input accepts correct file types

### Testing

- [ ] Open careers page in browser
- [ ] Click on a job listing
- [ ] Click "Apply for this Position"
- [ ] Fill out form with test data
- [ ] Upload a test resume (PDF)
- [ ] Complete Turnstile verification
- [ ] Submit application
- [ ] Verify success message appears
- [ ] Verify modal closes after 2 seconds
- [ ] Test with invalid data (missing fields)
- [ ] Test with invalid file type (.txt, .exe)
- [ ] Test without Turnstile (should be disabled)
- [ ] Test on mobile device/responsive view

### UI/UX

- [ ] Form is responsive on mobile
- [ ] All labels are clear and visible
- [ ] Loading states work correctly
- [ ] Error messages are clear
- [ ] Success messages are encouraging
- [ ] Turnstile widget loads properly
- [ ] File upload button works
- [ ] Submit button disables appropriately

---

## 🔐 Cloudflare Turnstile Setup

### Turnstile Configuration

- [ ] Turnstile site created in Cloudflare dashboard
- [ ] Domain/hostname is correct (or wildcard for dev)
- [ ] Site key copied to frontend `.env`
- [ ] Secret key copied to backend `.env`
- [ ] Widget type set to "Managed" (recommended)
- [ ] Theme set to "Dark" (matches your design)

### Verification

- [ ] Turnstile widget loads in browser
- [ ] Widget completes verification
- [ ] Token is generated and sent to backend
- [ ] Backend successfully verifies token
- [ ] Failed verification shows appropriate error

---

## 📧 Email Configuration

### SMTP Setup

- [ ] Email provider account created (Gmail/SendGrid/Outlook/etc.)
- [ ] SMTP credentials obtained
- [ ] App password created (if using Gmail with 2FA)
- [ ] SMTP settings tested (send test email)

### Email Templates

- [ ] Admin email template looks good in Gmail
- [ ] Admin email template looks good in Outlook
- [ ] Applicant email template looks good
- [ ] Email renders correctly on mobile
- [ ] Resume attachment appears in admin email
- [ ] Brand colors match (green gradient: #255900 to #52cc00)
- [ ] Company logo/name displays correctly

### Email Testing

- [ ] Test admin email with real SMTP
- [ ] Test applicant confirmation email
- [ ] Check spam folders (both admin and applicant)
- [ ] Verify email deliverability
- [ ] Test with different email providers (Gmail, Outlook, etc.)

---

## 🌐 Deployment Steps

### Backend Deployment (Vercel/Heroku/Railway)

#### 1. Code Preparation

- [ ] All changes committed to git
- [ ] `.env` file is in `.gitignore`
- [ ] `package.json` has correct scripts
- [ ] `tsconfig.json` is configured
- [ ] Build command: `npm run build`
- [ ] Start command: `npm start`

#### 2. Deploy to Hosting Service

- [ ] Repository connected to hosting service
- [ ] Environment variables added in dashboard
- [ ] Build triggered and successful
- [ ] Server is running (check health endpoint)
- [ ] Backend URL is noted for frontend

#### 3. Post-Deployment Verification

- [ ] Backend URL is accessible
- [ ] Health endpoint returns 200: `/api/health`
- [ ] Test career application endpoint with Postman
- [ ] Check server logs for errors
- [ ] CORS allows frontend domain

### Frontend Deployment (Vercel/Netlify/Cloudflare Pages)

#### 1. Update Configuration

- [ ] `VITE_API_URL` updated to production backend URL
- [ ] `VITE_TURNSTILE_SITE_KEY` verified
- [ ] Cloudflare Turnstile domain updated to production domain
- [ ] Build tested locally (`npm run build`)

#### 2. Deploy to Hosting Service

- [ ] Repository connected
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Environment variables set in dashboard
- [ ] Deploy triggered

#### 3. Post-Deployment Verification

- [ ] Frontend is accessible
- [ ] Careers page loads
- [ ] Job listings display correctly
- [ ] Modal opens properly
- [ ] Application form works
- [ ] Turnstile widget loads
- [ ] Can submit application successfully

---

## 🧪 Production Testing

### End-to-End Test

1. [ ] Visit production careers page
2. [ ] Browse job listings
3. [ ] Click on a position
4. [ ] Read job details
5. [ ] Click "Apply for this Position"
6. [ ] Fill form with real test data:
   - [ ] Name: Your test name
   - [ ] Email: Your test email
   - [ ] Phone: Your test phone
   - [ ] LinkedIn: (optional)
   - [ ] Portfolio: (optional)
   - [ ] Resume: Upload a real PDF
   - [ ] Cover Letter: Write a test letter
7. [ ] Complete Turnstile
8. [ ] Submit application
9. [ ] Verify success message
10. [ ] Check admin email inbox
11. [ ] Verify resume is attached
12. [ ] Check test email inbox
13. [ ] Verify confirmation email received

### Error Testing

- [ ] Try submitting without required fields
- [ ] Try uploading invalid file type
- [ ] Try uploading file over 5MB
- [ ] Try submitting without Turnstile
- [ ] Verify all error messages are appropriate

---

## 📱 Cross-Platform Testing

### Desktop Browsers

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Devices

- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Responsive view in Chrome DevTools

### Screen Sizes

- [ ] Mobile (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (769px+)
- [ ] Large screens (1920px+)

---

## 🔒 Security Verification

### Production Security Checklist

- [ ] HTTPS enabled on both frontend and backend
- [ ] No API keys exposed in frontend code
- [ ] Environment variables secured
- [ ] CORS configured for production domain only
- [ ] Turnstile verification cannot be bypassed
- [ ] File upload limits enforced
- [ ] File type validation working
- [ ] Rate limiting considered (optional but recommended)
- [ ] No sensitive data in error messages
- [ ] Server logs don't expose credentials

---

## 📊 Monitoring & Maintenance

### Post-Launch Monitoring

- [ ] Monitor email deliverability
- [ ] Check for error logs daily (first week)
- [ ] Track application submission rate
- [ ] Monitor server resources
- [ ] Check spam folder periodically
- [ ] Verify emails arrive within 1 minute

### Regular Maintenance

- [ ] Update dependencies monthly: `npm update`
- [ ] Check for security vulnerabilities: `npm audit`
- [ ] Review and update job listings
- [ ] Test application flow quarterly
- [ ] Renew SSL certificates (if self-managed)
- [ ] Review email templates for improvements

---

## 📞 Emergency Contacts

### Important Information

- **Backend URL**: **************\_\_**************
- **Frontend URL**: **************\_\_**************
- **Admin Email**: **************\_\_**************
- **Hosting Provider**: **************\_\_**************
- **Email Provider**: **************\_\_**************
- **Cloudflare Dashboard**: https://dash.cloudflare.com

### Troubleshooting Resources

- [ ] Backend server logs accessible
- [ ] Frontend error tracking enabled (Sentry, LogRocket, etc.)
- [ ] Email provider dashboard accessible
- [ ] Cloudflare Turnstile analytics available
- [ ] Documentation bookmarked

---

## 🎯 Success Criteria

Your careers page is successfully deployed when:

✅ Users can visit the careers page  
✅ Users can view job listings  
✅ Users can read full job descriptions  
✅ Users can fill out application form  
✅ Users can upload their resume  
✅ Users can complete Turnstile verification  
✅ Users can submit application successfully  
✅ Admin receives email with application and resume  
✅ Applicant receives confirmation email  
✅ Everything works on mobile devices  
✅ No console errors  
✅ No server errors

---

## 📝 Post-Deployment Notes

### After successful deployment, document:

- [ ] Production backend URL
- [ ] Production frontend URL
- [ ] Date of deployment
- [ ] Any issues encountered and resolutions
- [ ] Performance metrics (page load time, form submission time)
- [ ] Initial email delivery time
- [ ] Any custom configurations

---

## 🎉 Deployment Complete!

Once all items are checked, your careers page is live and ready to accept applications!

**Congratulations!** 🎊

---

## 📞 Support & Help

If you encounter issues:

1. **Check Documentation**:

   - `CAREERS_QUICK_START.md` - Quick setup guide
   - `CAREERS_INTEGRATION_GUIDE.md` - Complete documentation
   - `CAREERS_DATA_FLOW.md` - System architecture
   - `IMPLEMENTATION_SUMMARY.md` - Feature overview

2. **Debug**:

   - Check browser console (F12)
   - Check backend logs
   - Test API endpoint directly with Postman
   - Verify environment variables

3. **Common Issues**:
   - CORS errors → Check CORS configuration
   - Email not sending → Verify SMTP credentials
   - Turnstile not loading → Check site key
   - File upload failing → Check file size/type

---

**Good luck with your deployment!** 🚀
