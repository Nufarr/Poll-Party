import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import pollService from './pollService'

const initialState = {
  polls: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new poll
export const createPoll = createAsyncThunk(
  'polls/create',
  async (pollData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await pollService.createPoll(pollData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user polls
export const getPolls = createAsyncThunk(
  'polls/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await pollService.getPolls(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user poll
export const deletePoll = createAsyncThunk(
  'polls/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await pollService.deletePoll(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const pollSlice = createSlice({
  name: 'poll',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPoll.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPoll.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.polls.push(action.payload)
      })
      .addCase(createPoll.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPolls.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPolls.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.polls = action.payload
      })
      .addCase(getPolls.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletePoll.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletePoll.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.polls = state.polls.filter(
          (poll) => poll._id !== action.payload.id
        )
      })
      .addCase(deletePoll.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = pollSlice.actions
export default pollSlice.reducer