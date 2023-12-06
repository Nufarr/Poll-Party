const express = require('express')
const router = express.Router()
const {
  getPolls,
  setPoll,
  updatePoll,
  deletePoll,
} = require('../controllers/pollController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getPolls).post(protect, setPoll)
router.route('/:id').delete(protect, deletePoll).put(protect, updatePoll)

module.exports = router