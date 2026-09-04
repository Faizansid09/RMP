# AWSLPU-RMP Work Assignment - 4 Teams

This document divides the Recruitment Management Portal development into 4 distinct work streams, each assigned to a different team member.

---

## 🏗️ Person 1: Backend/API & Google Sheets Integration

**Owner:** [Person 1 Name]

### Responsibilities
- Set up Next.js API routes for backend functionality
- Implement Google Sheets API integration
- Configure service accounts and authentication
- Build API endpoints for data retrieval and updates
- Implement error handling and data validation
- Secure credential management (environment variables, `.env.local`)

### Deliverables
1. **Google Sheets API Setup**
   - Create service account in Google Cloud
   - Enable Google Sheets API
   - Set up environment variable configuration
   - Document the setup process

2. **API Routes**
   - `GET /api/applications` - Fetch all applications
   - `GET /api/applications/[id]` - Fetch single application details
   - `POST /api/applications/[id]/status` - Update application status
   - `GET /api/search` - Search applications by various fields

3. **Data Access Layer**
   - Create utility functions to read from Google Sheets
   - Create utility functions to write/update Google Sheets rows
   - Handle pagination for large datasets
   - Parse Role Answers JSON dynamically
   - Implement proper error handling

4. **Security**
   - Ensure credentials never reach client-side
   - Validate all incoming requests
   - Implement rate limiting considerations
   - Document security best practices

### Technical Stack
- Next.js API Routes
- Google Sheets API client library
- TypeScript
- Environment variable management

---

## 🎨 Person 2: Dashboard, Search & Filtering

**Owner:** [Person 2 Name]

### Responsibilities
- Build the dashboard UI/UX
- Implement search functionality
- Build filter and sort components
- Create responsive grid/table layout
- Connect frontend to backend API endpoints

### Deliverables
1. **Dashboard Page** (`/app/dashboard/page.tsx`)
   - Display all applications in a clean table or card layout
   - Show key application info: ID, Name, Status, Email, Preferred Role
   - Responsive design for mobile and desktop
   - Loading states and error handling

2. **Search Component**
   - Real-time search across multiple fields:
     - Application ID
     - Full Name
     - Registration Number
     - University Email
     - Personal Email
   - Debounced API requests
   - Clear search UI with visual feedback

3. **Filter Component**
   - Filter by Status (Pending, Shortlisted, Interview Scheduled, Selected, Rejected)
   - Filter by Preferred Role
   - Filter by Program
   - Filter by Branch
   - Multi-select capability
   - Clear all filters button
   - Visual indicator of active filters

4. **Sort Component**
   - Sort by Application ID
   - Sort by Name
   - Sort by Status
   - Sort by Preferred Role
   - Ascending/Descending toggle

5. **Status Badge**
   - Visual indicators for each status (color-coded)
   - Easy-to-scan layout

### Technical Stack
- React/Next.js
- TypeScript
- Tailwind CSS
- API integration

---

## 📋 Person 3: Application Details & Dynamic Display

**Owner:** [Person 3 Name]

### Responsibilities
- Build application detail page
- Implement Previous/Next navigation
- Handle dynamic role-answer JSON parsing and display
- Create detailed information layout

### Deliverables
1. **Application Details Page** (`/app/applications/[id]/page.tsx`)
   - Display all candidate information:
     - Full Name, Registration Number, Program, Branch, Semester, CGPA
     - Contact Info: University Email, Personal Email, Phone
     - Links: LinkedIn, GitHub, Portfolio, Resume
     - Preferred Role, Communities, Achievement
     - Why Join
   - Clean, well-organized layout
   - Responsive design

2. **Dynamic Role Answers Section**
   - Parse JSON from Role Answers column
   - Dynamically render all fields present in JSON
   - Display role-specific questions and answers
   - No hardcoded role fields - must be flexible for new roles
   - Handle different data types (text, numbers, lists, etc.)
   - Graceful handling of missing or unexpected fields

3. **Previous/Next Navigation**
   - Previous button to go to previous application
   - Next button to go to next application
   - Handle boundary cases (first/last application)
   - Maintain context (preserve filters/search if coming from dashboard)
   - Loading state while fetching next/previous application

4. **Back to Dashboard Link**
   - Easy navigation back to dashboard
   - Preserve search and filter state if possible

5. **Loading & Error States**
   - Skeleton loaders while fetching data
   - Error messages for failed data retrieval
   - 404 page for non-existent applications

### Technical Stack
- React/Next.js
- TypeScript
- Tailwind CSS
- Dynamic JSON parsing
- API integration

---

## 🔐 Person 4: Status Management, Security & Deployment

**Owner:** [Person 4 Name]

### Responsibilities
- Implement status update functionality
- Implement Cloudflare Access integration
- Secure credential management
- Set up deployment pipeline
- Handle production security considerations

### Deliverables
1. **Status Update Feature**
   - Status dropdown/selector on dashboard and details page
   - Update application status via API
   - Sync changes back to Google Sheet
   - Optimistic UI updates with error recovery
   - Confirmation dialog for status changes (optional but recommended)
   - Visual feedback (loading, success, error states)
   - Audit trail consideration (log who changed what when)

2. **Credentials & Secrets Management**
   - Set up `.env.local` for development
   - Document environment variables needed:
     - Google Cloud Service Account JSON
     - Google Sheet ID
     - API keys (if needed)
   - Ensure `.env.local` is in `.gitignore`
   - Document setup process for team members
   - Never commit secrets to repository

3. **Cloudflare Access Integration**
   - Set up Cloudflare Access protection for production
   - Configure authentication flow
   - Document the security architecture:
     - Reviewer → Cloudflare Access → Next.js → Google Sheets API → Google Sheet
   - Handle authentication redirects
   - Implement user context handling (optional: log which reviewer accessed what)

4. **Security Audit**
   - Review all API endpoints for security
   - Validate that Google credentials are server-side only
   - Check for XSS vulnerabilities
   - Verify CSRF protection
   - Document security best practices in README

5. **Deployment & Environment Configuration**
   - Choose deployment platform (Vercel, Cloud Run, etc.)
   - Set up production environment variables
   - Create deployment documentation
   - Set up CI/CD pipeline considerations
   - Document how to securely pass credentials in production
   - Testing in staging environment before production

6. **Documentation**
   - Write/update README with setup instructions
   - Document security architecture
   - Document credentials setup process
   - Create troubleshooting guide

### Technical Stack
- Next.js
- Cloudflare Access
- Environment management
- Deployment platform (TBD)
- Google Sheets API

---

## 📊 Summary of Work Streams

| Person | Primary Focus | Key Pages/Components | Owner |
|--------|--------------|----------------------|-------|
| **Person 1** | API & Integrations | `/api/*` routes | [Name] |
| **Person 2** | UI & Interactions | `/dashboard` | [Name] |
| **Person 3** | Application View | `/applications/[id]` | [Name] |
| **Person 4** | Access & Deployment | Security, Deployment | [Name] |

---

## 🔗 Cross-Team Dependencies

- **Person 1 → All**: Backend API must be ready before frontend persons can integrate
- **Person 2 → Person 3**: Dashboard search/filter context should be preserved when navigating to details
- **Person 3 → Person 1**: Details page depends on dynamic role-answer parsing from API
- **Person 4 → All**: Security setup should be integrated throughout development
- **Person 2 & Person 3 → Person 4**: Status update UI components must work with API from Person 4

### Recommended Development Order
1. **Person 1** starts immediately - build the API layer and Google Sheets integration
2. **Persons 2 & 3** begin once Person 1 has basic endpoints ready
3. **Person 4** begins with credentials/security setup in parallel with Persons 2-3
4. **Person 4** completes status update feature and Cloudflare Access after core features work

---

## ✅ Definition of Done (Per Team)

### Person 1
- [ ] Google Sheets API integration fully functional
- [ ] All API endpoints tested and working
- [ ] Error handling implemented
- [ ] Credentials secured and documented
- [ ] Code reviewed by another team member

### Person 2
- [ ] Dashboard displays all applications
- [ ] Search works across specified fields
- [ ] All filters functional
- [ ] Sorting works correctly
- [ ] Responsive design tested
- [ ] Connected to Team 1 API endpoints
- [ ] Code reviewed by another team member

### Person 3
- [ ] Details page displays all candidate information
- [ ] Dynamic role answers parse and display correctly
- [ ] Previous/Next navigation works
- [ ] Responsive design tested
- [ ] Connected to Team 1 API endpoints
- [ ] Handles edge cases (first/last application)
- [ ] Code reviewed by another team member

### Person 4
- [ ] Status updates work end-to-end
- [ ] Google Sheet updates reflect status changes
- [ ] Cloudflare Access configured (or documented for production)
- [ ] Credentials setup documented
- [ ] Deployment process documented
- [ ] Security audit completed
- [ ] README updated with all setup instructions
- [ ] Code reviewed by another team member

---

## 📝 Notes

- **Communication**: All persons should communicate about API contracts (Person 1 → Persons 2-3)
- **Staging**: Set up a shared demo Google Sheet for testing across all teams
- **Code Review**: Each team member should review code from other team members
- **Testing**: Manual testing across browsers and devices as features complete
- **Git Workflow**: Use feature branches and pull requests for all changes

---

## 🚀 Success Criteria

All teams successfully deliver their components and:
- [ ] The portal loads without errors
- [ ] Search, filter, and sort work correctly
- [ ] Application details display all information
- [ ] Status updates sync to Google Sheet
- [ ] Security requirements are met
- [ ] Code is clean, documented, and maintainable
- [ ] Team members understand their code
