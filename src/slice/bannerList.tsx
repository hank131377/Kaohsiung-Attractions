import { createSlice } from '@reduxjs/toolkit'

const bannerList = createSlice({
  name: 'bannerList',
  initialState: { searchValue: '' },
  reducers: {
    setSearchValue: (store, action) => {
      const { searchValue } = action.payload
      return { ...store, searchValue }
    },
  },
})

export const { setSearchValue } = bannerList.actions
export default bannerList.reducer
