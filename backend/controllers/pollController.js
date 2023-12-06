const asyncHandler = require('express-async-handler')

const Poll = require('../models/pollModel')
const User = require('../models/userModel')

// @desc    Get polls
// @route   GET /api/polls
// @access  Private
const getPolls = asyncHandler(async (req, res) => {
  const polls = await Poll.find({ user: req.user.id })

  res.status(200).json(polls)
})

// @desc    Set poll
// @route   POST /api/polls
// @access  Private
const setPoll = asyncHandler(async (req, res) => {
  const requiredFields = ['question'];
  const options = [];

  // Validate required fields
  for (const field of requiredFields) {
    if (!req.body[field]) {
      res.status(400);
      throw new Error(`Please add a text field for ${field}`);
    }
  }

  // Collect options dynamically
  for (const key in req.body) {
    if (key.startsWith('option')) {
      options.push(req.body[key]);
    }
  }

  // Create poll data
  const pollData = {
    question: req.body.question,
    user: req.user.id,
  };

  // Add options to pollData
  options.forEach((option, index) => {
    const optionField = `option${index + 1}`;
    pollData[optionField] = option;
  });
  const poll = await Poll.create(pollData);

  res.status(200).json(poll);
});

// @desc    Update poll
// @route   PUT /api/polls/:id
// @access  Private
const updatePoll = asyncHandler(async (req, res) => {
  const poll = await Poll.findById(req.params.id)

  if (!poll) {
    res.status(400)
    throw new Error('Poll not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the poll user
  if (poll.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedPoll = await Poll.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedPoll)
})

// @desc    Delete poll
// @route   DELETE /api/polls/:id
// @access  Private
const deletePoll = asyncHandler(async (req, res) => {
  const poll = await Poll.findById(req.params.id)

  if (!poll) {
    res.status(400)
    throw new Error('Poll not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the poll user
  if (poll.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await poll.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getPolls,
  setPoll,
  updatePoll,
  deletePoll,
}