# 🧪 Testing & Debugging Strategy

## Overview
This project implements comprehensive testing and debugging strategies for a MERN stack application, covering unit, integration, and end-to-end (E2E) testing, as well as key debugging techniques.

---

## Testing Strategy

### Unit Testing
- **Server:**
  - Jest for utility functions, Mongoose models, and Express middleware (e.g., `auth.js`).
- **Client:**
  - Jest and React Testing Library for React components and utility functions (e.g., `Button`, `SampleComponent`, `capitalize`).

### Integration Testing
- **Server:**
  - Supertest with Jest for API endpoints and database operations (e.g., `/api/posts`).
  - Uses `mongodb-memory-server` for isolated, in-memory database tests.
- **Client:**
  - React Testing Library for components that interact with APIs (e.g., `PostsList`).

### End-to-End (E2E) Testing
- **Cypress:**
  - Tests real user flows, such as visiting the home page and verifying posts are displayed.
  - (Add more flows as needed, e.g., creating posts, navigation, error handling.)

### Coverage
- Run `npm test -- --coverage` in both client and server to generate coverage reports.
- See `/screenshots/` for coverage report screenshots.

### Debugging Techniques
- **Server:**
  - Console logging and a global error handler middleware for debugging.
- **Client:**
  - React error boundary for catching UI errors.
  - Browser dev tools (Console and Network tabs) for client-side debugging.

---

## How to Run Tests

### Server
- Run all tests: `npm test`
- Run with coverage: `npm test -- --coverage`

### Client
- Run all tests: `npm test`
- Run with coverage: `npm test -- --coverage`

### E2E (Cypress)
- Start both backend and frontend servers.
- Run Cypress: `npm run cypress`

---

## Screenshots
- Add your coverage and E2E screenshots to a `screenshots/` folder in your repo.
- Reference them in your documentation:
  ```
  ![Server Coverage](screenshots/server-coverage.png)
  ![Client Coverage](screenshots/client-coverage.png)
  ![Cypress E2E](screenshots/cypress-e2e.png)
  ```

---

## Debugging Examples
- **Server:**
  - Example of a server error being caught by the global error handler (see server logs).
- **Client:**
  - Example of a React error boundary in action (see UI if a component throws).
- **Browser Dev Tools:**
  - Screenshot of using the Network or Console tab to debug a failed fetch.

---

## Final Checklist
- [x] All test types present and passing
- [x] Coverage screenshots included
- [x] Debugging techniques implemented and documented
- [x] Testing strategy documented
- [x] Regular commits pushed to GitHub 