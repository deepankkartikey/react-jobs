# react-jobs

## Overview
**react-jobs** is a ReactJS project that allows users to manage job listings with ease. The application is built with a component-based design and offers features like adding, editing, viewing, and deleting jobs. The app includes multiple pages for job listings, adding and editing jobs, and other necessary functionality. The application uses several modern tools and libraries for an enhanced user experience and performance.

## Features
- **View Jobs:** Browse through the available job listings.
- **Add Jobs:** Add new job listings to the database.
- **Edit Jobs:** Modify existing job listings.
- **Delete Jobs:** Remove job listings from the database.
- **Routing:** Implemented using React Router, Link, and Route to enable smooth navigation without page reloads.
- **Notifications:** Integrated pop notifications using react-toastify for adding, updating, and deleting job listings.
- **Loading Indicators:** Used react-spinners to display loading spinners while pages load.
- **Custom Icons:** Utilized react-icons for an enhanced user interface.
- **Multiple Pages:** Includes separate pages for Home, Job Listings, Add Job, Edit Job, and Job Details.
- **API Integration:** The backend is powered by json-server, serving a document as a database with API methods passed as props to React components.
- **Route Loaders:** Used loaders for edit job listing and delete job listing routes to pre-fetch data before rendering the route element.

## Tech Stack
- **Frontend:**
  - ReactJS (Component-based design)
  - React Router (Routing)
  - Vite (For faster loading and packaging)
  - Tailwind CSS (For styling)
  - React Icons (For icons)
  - React Spinners (For loading indicators)
  - React Toastify (For notifications)

- **Backend:**
  - json-server (For simulating a REST API)
  
## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/deepankkartikey/react-jobs.git

2. Navigate to the Project directory:
   ```bash
   cd react-jobs

3. Install all dependencies:
   ```bash
   npm install

4. Start the json-server:
   ```bash
   npm run server

5. Start the react-jobs application:
   ```bash
   npm run dev

5. Open the browser and go to:
   ```bash
   http://localhost:3000/

