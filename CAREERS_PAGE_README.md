# Careers Page Documentation

## Overview

A comprehensive and visually appealing careers page built for SoftBuses that showcases company culture, benefits, job openings, and provides an interactive application process.

## Features

### 🎯 Hero Section

- Compelling headline with animated text effects
- Call-to-action buttons for viewing positions and learning why to join
- Company statistics (team size, global presence, remote work)
- Animated background with floating elements

### 🌟 Why Join Us Section

- 6 compelling reasons to join the team:
  - Cutting-Edge Technology
  - Global Impact
  - Innovation Culture
  - Collaborative Environment
  - Career Growth
  - Work-Life Balance
- Icon-based cards with hover effects
- Responsive grid layout

### 💎 Benefits & Perks Section

- 6 comprehensive benefit categories:
  - Compensation & Benefits
  - Health & Wellness
  - Time Off
  - Learning & Development
  - Work Setup
  - Perks & Culture
- Detailed list of benefits in each category
- Gradient cards with glow effects on hover

### 💼 Job Listings Section

- 8 pre-configured job positions across departments:
  - Engineering (Full-Stack, DevOps, Mobile, QA)
  - AI & Machine Learning
  - Design (UI/UX)
  - Data Science
  - Product Management
- Department-based filtering
- Interactive job cards with quick info
- Expandable job details in modal
- Smooth animations and transitions

### 📋 Job Detail Modal

- Complete job description
- Responsibilities list
- Requirements checklist
- Nice-to-have skills
- Integrated application form
- File upload for resume
- Toggle between job details and application form

### 🔄 Application Process Section

- 6-step hiring process visualization:
  1. Apply Online
  2. Initial Screening
  3. Technical Assessment
  4. Team Interview
  5. Final Round
  6. Offer
- Timeline-style layout on desktop
- Icon and number indicators
- Process duration information

### 📧 Contact Section

- Reuses existing CoCreateSection component
- Contact information for career inquiries
- Consistent with site-wide design

## Components Structure

```
src/
├── pages/
│   └── CareersPage.jsx              # Main careers page
├── components/
│   └── careersPage/
│       ├── hero/
│       │   ├── Hero.jsx             # Hero section
│       │   └── HeroBg.jsx           # Animated background
│       ├── WhyJoinUs.jsx            # Reasons to join
│       ├── Benefits.jsx             # Benefits and perks
│       ├── JobListings.jsx          # Job listings with filters
│       ├── JobCard.jsx              # Individual job card
│       ├── JobDetail.jsx            # Job detail modal with form
│       └── ApplicationProcess.jsx   # Hiring process steps
└── assets/
    └── careersData/
        └── jobOpenings.js           # Job positions data
```

## Data Management

### Job Opening Structure

Each job in `jobOpenings.js` contains:

- `id`: Unique identifier
- `title`: Job title
- `department`: Department name
- `location`: Work location
- `type`: Employment type (Full-time, Part-time, Contract)
- `experience`: Required years of experience
- `description`: Brief job description
- `responsibilities`: Array of responsibilities
- `requirements`: Array of required qualifications
- `niceToHave`: Array of preferred qualifications

## Routing

- **URL**: `/careers`
- Integrated into main navigation menu
- Added to both desktop and mobile headers
- Supports direct navigation and hash links

## Design Features

### Animations

- Framer Motion animations throughout
- Scroll-triggered animations using `useInView`
- Hover effects on interactive elements
- Smooth page transitions

### Styling

- Consistent with SoftBuses brand colors (primary: #69FF00)
- Dark theme with gradient accents
- Responsive design (mobile, tablet, desktop)
- Neon glow effects on borders and shadows
- Glassmorphism effects

### Interactivity

- Filter jobs by department
- Expandable job detail modals
- In-modal application form
- File upload functionality
- Form validation

## Customization Guide

### Adding New Jobs

1. Open `src/assets/careersData/jobOpenings.js`
2. Add a new job object with all required fields
3. The job will automatically appear in the listings

### Modifying Benefits

1. Edit the `benefits` array in `src/components/careersPage/Benefits.jsx`
2. Add or modify categories and items
3. Icons can be changed using emoji or icon libraries

### Updating Application Process

1. Edit the `steps` array in `src/components/careersPage/ApplicationProcess.jsx`
2. Modify step numbers, titles, descriptions, and icons

### Customizing Stats

1. Edit the stats section in `src/components/careersPage/hero/Hero.jsx`
2. Update numbers and labels as needed

## Future Enhancements

### Potential Additions

- [ ] Integration with ATS (Applicant Tracking System)
- [ ] Video testimonials from employees
- [ ] Virtual office tour
- [ ] Diversity and inclusion section
- [ ] Employee stories/blog posts
- [ ] Salary ranges and compensation calculator
- [ ] Department-specific pages
- [ ] Interview preparation resources
- [ ] Referral program information
- [ ] Internship and graduate programs

### Technical Improvements

- [ ] Backend API for job listings
- [ ] Email notifications on application
- [ ] Application status tracking
- [ ] LinkedIn integration
- [ ] Social media sharing
- [ ] Analytics tracking
- [ ] A/B testing for CTAs
- [ ] Multi-language support

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels for interactive elements
- Focus indicators
- Responsive text sizing
- High contrast ratios

## Performance

- Lazy loading for images
- Code splitting
- Optimized animations
- Minimal bundle size
- Fast page load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

Built with React, Framer Motion, and TailwindCSS 🚀
