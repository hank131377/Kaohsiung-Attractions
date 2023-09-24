import { configureStore } from '@reduxjs/toolkit'
import bannerList from './slice/bannerList'
import optionsList from './slice/optionsList'

export const store = configureStore({
  reducer: {
    banner: bannerList,
    options: optionsList,
  },
})
