import React from 'react'

import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom';

import HomePage from './pages/HomePage';

import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';

import NotFound from './pages/NotFound';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
    // Add New Job
    const addJob = async (newJob) => {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
      })
      return;
    };

    // Delete a job
    const deleteJob = async (jobId) => {
      // console.log('delete', jobId)
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE'
      })
      return;
    }

    // Update a Job
    const updateJob = async (updatedJobDetails) => {
      const res = await fetch(`/api/jobs/${updatedJobDetails.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedJobDetails)
      })
      return;
    };

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={ <MainLayout /> }>
        <Route index element= {<HomePage />}/>
        <Route path='/jobs' element= {<JobsPage />}/>
        <Route path='/add-job' element= {<AddJobPage addJobSubmit={ addJob }/>}/>
        <Route path='/jobs/:id' element= {<JobPage deleteJob={ deleteJob }/>} loader={jobLoader}/>
        <Route path='/edit-job/:id' element= {<EditJobPage updateJob = { updateJob }/>} loader={jobLoader}/>
        <Route path='/*' element= {<NotFound />}/></Route>
      )
    );
   return <RouterProvider router={ router } />;
}

export default App