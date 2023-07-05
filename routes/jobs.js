const express = require('express')
const testUser = require('../middleware/testUser')//testUser

const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  showStats,
} = require('../controllers/jobs')

//router.route('/').post(createJob).get(getAllJobs)
router.route('/').post(testUser,createJob).get(getAllJobs)//testUser
router.route('/stats').get(showStats)
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router
