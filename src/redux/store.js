import { configureStore } from '@reduxjs/toolkit'

import BestProductReducer from './reducers/BestProductSlice'

export default configureStore({
  reducer: {
    BestProduct: BestProductReducer,
  },
})