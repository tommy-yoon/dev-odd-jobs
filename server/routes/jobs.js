const express = require('express')
const router = express.Router()

const db = require('../db/db')

// MEMBER =====================================================================
// GET route: /api/v1/jobs/1       (returns a list of jobs for a single member)
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId
  try {
    const jobs = await db.getMemberJobsList(userId)
    res.status(200)
    res.json(jobs)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// MEMBER =====================================================================
// GET route: /api/v1/jobs/2/applicants/12 (returns info on a single applicant)
// router.get('/:userId/applicants/:applicantId', async (req, res) => {
router.get('/:apprenticeAppliedJobId/:apprenticeId/apprenticeAppliedJob', async (req, res) => {
  const apprenticeAppliedJobId = req.params.apprenticeAppliedJobId
  const apprenticeId = req.params.apprenticeId
  try {
    // get applicant info
    const applicantInfo = await db.getJobApplicant(apprenticeAppliedJobId)
    // get applicant's location array
    const locations = await db.getApprenticeLocations(apprenticeId)
    applicantInfo.locations = locations
    // get applicant's service type & experience rating array
    const serviceTypes = await db.getApprenticeServiceTypes(apprenticeId)
    applicantInfo.serviceTypes = serviceTypes
    res.status(200)
    res.json(applicantInfo)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// MEMBER & APPRENTICE =========================================================
// GET route: /api/v1/jobs/details/2      (returns the details for a single job)
router.get('/details/:jobId', async (req, res) => {
  const jobId = req.params.jobId
  try {
    const jobDetails = await db.getJobDetails(jobId)
    const applicants = await db.getJobApplicantList(jobId)
    jobDetails.applicants = applicants
    res.status(200)
    res.json(jobDetails)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// MEMBER ======================================================================
// DELETE route: /api/jobs/details/2          (deletes a single job from the db)
router.delete('/details/:jobId', async (req, res) => {
  const jobId = req.params.jobId
  try {
    const ids = await db.deleteJobListingById(jobId)
    res.status(200)
    res.json({ message: `Job ${ids[0]} successfully deleted` })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// MEMBER ======================================================================
// POST route: /api/v1/jobs/new         (adds a new job listing to the database)
router.post('/new', async (req, res) => {
  const {
    title,
    description,
    paid,
    locationId,
    expectedStart,
    expectedEnd,
    serviceTypeId,
    userId
  } = req.body
  const jobListing = {
    title: title,
    description: description,
    paid: Number(paid),
    location_id: Number(locationId),
    expected_start: expectedStart,
    expected_end: expectedEnd,
    service_type_id: Number(serviceTypeId),
    created_member_id: userId
  }
  try {
    const job = await db.addJobListing(jobListing)
    res.status(201)
    res.json(job)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// MEMBER ======================================================================
// POST route: /api/v1/jobs/edit/2       (updates a job listing in the database)
router.post('/edit/:jobId', async (req, res) => {
  const {
    title,
    description,
    paid,
    locationId,
    expectedStart,
    expectedEnd,
    serviceTypeId
  } = req.body
  const jobListing = {
    title: title,
    description: description,
    paid: paid,
    location_id: locationId,
    expected_start: expectedStart,
    expected_end: expectedEnd,
    service_type_id: serviceTypeId
  }
  try {
    const updatedJobListing = await db.updateJobListing(req.params.jobId, jobListing)
    res.status(201)
    res.json({ message: `Job ${updatedJobListing.id} successfully updated` })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// UTILITY ====================================================================
// GET route: /api/v1/jobs/                        (returns a list of all jobs)
router.get('/', async (req, res) => {
  try {
    const jobs = await db.getAllJobs()
    res.status(200)
    res.json(jobs)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// // API endpoint example
// router.get('/list', async (req, res) => {
//   try {
//     const members = await db.getMembers()
//     res.json(members)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ error: error.message })
//   }
// })

module.exports = router
