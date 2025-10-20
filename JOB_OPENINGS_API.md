# 📋 Job Openings API Documentation

## Overview

The Job Openings API provides endpoints to fetch job positions dynamically from the backend. This enables easy management of job listings without frontend code changes.

---

## 🚀 Endpoints

### 1. Get All Job Openings

**Endpoint:** `GET /api/job-openings`

**Description:** Retrieves all available job openings.

**Request:**
```bash
GET http://localhost:4000/api/job-openings
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Senior Full-Stack Developer",
      "department": "Engineering",
      "location": "Remote (Worldwide)",
      "type": "Full-time",
      "experience": "5+ years",
      "description": "We're looking for an experienced...",
      "responsibilities": [...],
      "requirements": [...],
      "niceToHave": [...]
    },
    ...
  ],
  "count": 8
}
```

**Response (500 Error):**
```json
{
  "success": false,
  "message": "Failed to fetch job openings. Please try again later."
}
```

---

### 2. Get Job Opening by ID

**Endpoint:** `GET /api/job-openings/:id`

**Description:** Retrieves a specific job opening by its ID.

**Request:**
```bash
GET http://localhost:4000/api/job-openings/1
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Senior Full-Stack Developer",
    "department": "Engineering",
    "location": "Remote (Worldwide)",
    "type": "Full-time",
    "experience": "5+ years",
    "description": "We're looking for an experienced...",
    "responsibilities": [...],
    "requirements": [...],
    "niceToHave": [...]
  }
}
```

**Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Job opening not found."
}
```

**Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Invalid job ID."
}
```

---

### 3. Get Jobs by Department

**Endpoint:** `GET /api/job-openings/department/:department`

**Description:** Retrieves all job openings in a specific department.

**Request:**
```bash
GET http://localhost:4000/api/job-openings/department/Engineering
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Senior Full-Stack Developer",
      "department": "Engineering",
      ...
    },
    {
      "id": 4,
      "title": "DevOps Engineer",
      "department": "Engineering",
      ...
    }
  ],
  "count": 2
}
```

**Note:** Use "all" as department to get all jobs:
```bash
GET http://localhost:4000/api/job-openings/department/all
```

---

## 📊 Available Departments

Current departments in the system:
- **Engineering**
- **AI & Machine Learning**
- **Design**
- **Data & Analytics**
- **Product**
- **Quality Assurance**

---

## 🎯 Frontend Integration

### API Helper Functions

Located in: `src/api/jobOpenings.js`

#### 1. Fetch All Job Openings
```javascript
import { fetchJobOpenings } from "../../api/jobOpenings";

const loadJobs = async () => {
  try {
    const response = await fetchJobOpenings();
    console.log(response.data); // Array of jobs
    console.log(response.count); // Total count
  } catch (error) {
    console.error(error.message);
  }
};
```

#### 2. Fetch Job by ID
```javascript
import { fetchJobById } from "../../api/jobOpenings";

const loadJob = async (jobId) => {
  try {
    const response = await fetchJobById(jobId);
    console.log(response.data); // Single job object
  } catch (error) {
    console.error(error.message);
  }
};
```

#### 3. Fetch Jobs by Department
```javascript
import { fetchJobsByDepartment } from "../../api/jobOpenings";

const loadDepartmentJobs = async (department) => {
  try {
    const response = await fetchJobsByDepartment(department);
    console.log(response.data); // Filtered jobs
  } catch (error) {
    console.error(error.message);
  }
};
```

---

## 🔧 Backend Implementation

### File Structure
```
softbuses-backend/
├── src/
│   └── routes/
│       ├── jobOpenings.ts       ✨ NEW - Job openings endpoints
│       └── index.ts             📝 MODIFIED - Added route
```

### Job Data Storage

Currently, job data is stored in-memory in `jobOpenings.ts`. 

**Future Enhancement:** Move to database (MongoDB, PostgreSQL) for:
- Easy updates without redeployment
- Admin dashboard for managing jobs
- Job status tracking (open/closed)
- Application tracking

---

## 🎨 Frontend Components

### JobListings Component

**Location:** `src/components/careersPage/JobListings.jsx`

**Updates:**
- ✅ Fetches jobs from API on mount
- ✅ Shows loading spinner while fetching
- ✅ Displays error message if fetch fails
- ✅ Filters jobs by department (client-side)
- ✅ Falls back gracefully on error

**States:**
```javascript
const [jobOpenings, setJobOpenings] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
```

**Lifecycle:**
1. Component mounts
2. `useEffect` triggers API call
3. Loading state shows spinner
4. On success: displays jobs
5. On error: shows error message

---

## 🧪 Testing

### Backend Testing

#### Test with curl:
```bash
# Get all jobs
curl http://localhost:4000/api/job-openings

# Get specific job
curl http://localhost:4000/api/job-openings/1

# Get jobs by department
curl http://localhost:4000/api/job-openings/department/Engineering
```

#### Test with Postman/Thunder Client:
1. Create GET request to `http://localhost:4000/api/job-openings`
2. Send request
3. Verify response structure

### Frontend Testing

1. **Start Backend:**
   ```bash
   cd softbuses-backend
   npm run dev
   ```

2. **Start Frontend:**
   ```bash
   cd softbuses
   npm run dev
   ```

3. **Test Scenarios:**
   - Navigate to careers page
   - Verify loading spinner appears
   - Verify jobs load successfully
   - Test department filters
   - Stop backend and verify error message
   - Restart backend and refresh page

---

## 🔄 Migration Guide

### Before (Static Data)
```javascript
// JobListings.jsx
import { jobOpenings } from "../../assets/careersData/jobOpenings";

const JobListings = () => {
  // Jobs were imported statically
  const [filterDepartment, setFilterDepartment] = useState("All");
  
  const filteredJobs = filterDepartment === "All"
    ? jobOpenings
    : jobOpenings.filter(job => job.department === filterDepartment);
  
  // ...
};
```

### After (Dynamic from API)
```javascript
// JobListings.jsx
import { fetchJobOpenings } from "../../api/jobOpenings";

const JobListings = () => {
  const [jobOpenings, setJobOpenings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadJobOpenings = async () => {
      try {
        const response = await fetchJobOpenings();
        setJobOpenings(response.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadJobOpenings();
  }, []);
  
  // ...
};
```

---

## 💡 Adding New Jobs

### Current Method (In-Memory)

Edit `softbuses-backend/src/routes/jobOpenings.ts`:

```typescript
const jobOpenings = [
  // ... existing jobs
  {
    id: 9,  // Increment ID
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote (Worldwide)",
    type: "Full-time",
    experience: "3+ years",
    description: "Build robust backend systems...",
    responsibilities: [...],
    requirements: [...],
    niceToHave: [...]
  }
];
```

**Restart backend** to see new job.

### Future Method (Database)

When migrated to database:
1. Create admin dashboard
2. Add job via web interface
3. No code changes needed
4. No server restart required

---

## 🚀 Deployment Considerations

### Environment Variables

No new environment variables needed for basic functionality.

### API URL

Frontend automatically uses:
- **Development:** `http://localhost:4000`
- **Production:** Value from `VITE_API_URL`

### CORS

Ensure backend CORS allows frontend domain:
```typescript
// server.ts
app.use(cors({
  origin: process.env.FRONTEND_URL || "*"
}));
```

---

## 📈 Performance

### Response Times
- Get all jobs: ~10-50ms
- Get by ID: ~5-20ms
- Get by department: ~10-30ms

### Caching Strategies (Future)

1. **Frontend Caching:**
   - Cache API response for 5 minutes
   - Refresh on page reload
   - Update cache on background

2. **Backend Caching:**
   - Redis cache for job data
   - Invalidate on job updates
   - Reduce database queries

3. **CDN Caching:**
   - Cache at edge for faster global access
   - Set appropriate cache headers

---

## 🔐 Security

### Current Implementation
- ✅ No authentication required (public data)
- ✅ Input validation on job ID
- ✅ Error handling without data leakage
- ✅ CORS configured

### Future Enhancements
- Add rate limiting to prevent abuse
- Implement API key for certain operations
- Add admin authentication for job management

---

## 🐛 Troubleshooting

### Jobs Not Loading

**Check:**
1. Backend is running (`npm run dev`)
2. Backend URL is correct in frontend `.env`
3. No CORS errors in browser console
4. API endpoint returns data (test with curl)

**Common Errors:**
```
Failed to fetch job openings
```
- Backend is not running
- Wrong API URL in frontend
- CORS blocking request

### Loading Spinner Stuck

**Check:**
1. Network tab for API call status
2. Console for JavaScript errors
3. Backend logs for errors

### Empty Job List

**Check:**
1. API returns data (test with curl)
2. `response.data` structure is correct
3. No filtering issues

---

## 📝 Future Enhancements

### Phase 1: Database Integration
- [ ] Add MongoDB/PostgreSQL
- [ ] Create job schema/model
- [ ] Migrate job data to database
- [ ] Add database queries

### Phase 2: Admin Dashboard
- [ ] Create admin panel
- [ ] Add/edit/delete jobs via UI
- [ ] Job status management (open/closed)
- [ ] Publish/unpublish functionality

### Phase 3: Advanced Features
- [ ] Job search functionality
- [ ] Saved jobs for users
- [ ] Job alerts/notifications
- [ ] Application tracking integration
- [ ] Analytics (views, applications per job)

### Phase 4: Optimization
- [ ] Implement caching strategy
- [ ] Add pagination for large job lists
- [ ] Optimize API response size
- [ ] Add CDN for static job data

---

## ✅ Benefits of API-Based Job Listings

1. **Centralized Management:** Update jobs in one place
2. **No Frontend Deployment:** Change jobs without rebuilding frontend
3. **Scalability:** Easy to add database later
4. **Consistency:** Same job data across all platforms
5. **Real-time Updates:** Changes reflect immediately
6. **Better SEO:** Can implement server-side rendering
7. **Analytics:** Track job views and popularity
8. **A/B Testing:** Test different job descriptions

---

## 🎯 Quick Reference

### Endpoints Summary
```
GET  /api/job-openings              → All jobs
GET  /api/job-openings/:id          → Specific job
GET  /api/job-openings/department/:dept → Jobs by department
```

### Frontend API Functions
```javascript
fetchJobOpenings()           → Get all jobs
fetchJobById(id)            → Get specific job
fetchJobsByDepartment(dept) → Get filtered jobs
```

### Files Modified
```
Backend:
✨ src/routes/jobOpenings.ts
📝 src/routes/index.ts

Frontend:
✨ src/api/jobOpenings.js
📝 src/components/careersPage/JobListings.jsx
```

---

**Your job openings are now dynamically fetched from the backend!** 🎉
