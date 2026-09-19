# Person 1 - API & Security Documentation

## Overview

This document describes the API routes, Google Sheets integration,
validation, error handling, and security considerations implemented
for the Recruitment Management Portal.

## API Routes

### 1. Get All Applications

**Endpoint**

GET `/api/applications`

Returns all applications stored in the configured Google Sheet.

### 2. Get Application by ID

**Endpoint**

GET `/api/applications/[id]`

Returns a single application using its Application ID.

Example:

`GET /api/applications/AWS-2026-DEMO-0001`

### 3. Update Application Status

**Endpoint**

POST `/api/applications/[id]/status`

Updates the application status in Google Sheets.

Supported statuses:

- Pending
- Shortlisted
- Interview Scheduled
- Selected
- Rejected

Invalid statuses are rejected with HTTP 400.

### 4. Search Applications

**Endpoint**

GET `/api/search?q=<search-term>`

Searches application data by fields such as:

- Application ID
- Full Name
- Registration Number
- University Email
- Personal Email
- Phone
- Program
- Branch
- Status

## Google Sheets Integration

Google Sheets API is used as the application's data source.

The service account credentials are stored in environment variables:

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_SPREADSHEET_ID`
- `GOOGLE_SHEET_NAME`

Actual credential values must never be committed to GitHub.

## Security

- Google service-account credentials are kept server-side.
- Credentials are stored in `.env.local`.
- `.env.local` is excluded through `.gitignore`.
- `.env.local` is not tracked by Git.
- API input values are validated before processing.
- Invalid application statuses are rejected.
- Missing applications return HTTP 404.
- Server errors return controlled error responses.
- Sensitive credentials are not returned by the API.

## Role Answers

Dynamic role-specific answers stored as JSON are parsed safely.
Invalid JSON falls back to an empty object instead of crashing the API.

## Error Handling

The API uses appropriate HTTP responses including:

- `200` - Successful request
- `201` - Resource created
- `400` - Invalid request/input
- `404` - Application not found
- `500` - Server-side error

## Rate Limiting Consideration

For production deployment, rate limiting should be applied to
public-facing API endpoints, especially search and write operations.

Possible controls include:

- Request limits per IP address
- Request limits per user/session
- Stricter limits for write operations
- Monitoring and logging of repeated failed requests

Rate limiting can be implemented using an API gateway, middleware,
or a managed rate-limiting service depending on the deployment
environment.

## Environment File

Create `.env.local` locally using the required environment variables.

Do not commit `.env.local` or service-account JSON/private-key files
to the repository.

Use `.env.example` for documenting required variable names without
including real secret values.