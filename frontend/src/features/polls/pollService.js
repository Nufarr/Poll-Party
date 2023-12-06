import axios from 'axios'

const API_URL = '/api/polls/'

// Create new poll
const createPoll = async (pollData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, pollData, config)

  return response.data
}

// Get user polls
const getPolls = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user poll
const deletePoll = async (pollId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + pollId, config)

  return response.data
}

const pollService = {
  createPoll,
  getPolls,
  deletePoll,
}

export default pollService