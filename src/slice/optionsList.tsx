import { createSlice } from '@reduxjs/toolkit'

const optionsList = createSlice({
  name: 'optionsList',
  initialState: { locationOption: false, locationValue: '', dateOption: false },
  reducers: {
    setLocationOption: (store, action) => {
      const { locationOption } = action.payload
      return { ...store, locationOption }
    },
    setLocationValue: (store, action) => {
      const { locationValue } = action.payload
      return { ...store, locationValue }
    },
    setDateOption: (store, action) => {
      const { dateOption } = action.payload
      return { ...store, dateOption }
    },
  },
})
export const { setLocationOption, setLocationValue, setDateOption } =
  optionsList.actions
export default optionsList.reducer
