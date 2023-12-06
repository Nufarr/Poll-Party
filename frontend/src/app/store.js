import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import pollReducer from '../features/polls/pollSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    polls: pollReducer,
  },
})