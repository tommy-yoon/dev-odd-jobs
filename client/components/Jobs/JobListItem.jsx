import React from 'react'
// import { Link } from 'react-router-dom'
// api detail

function JobListItem ({ jobs }) {
  console.log('jobsItem', jobs)
  return (
    <div>
      {jobs.map((jobs) => {
        return (
          <ul key={jobs.jobsId}>
            <li>{jobs.jobsId}</li>
            <li>{jobs.jobsTitle}</li>
          </ul>
        )
      })}
    </div>

  )
}

export default JobListItem
