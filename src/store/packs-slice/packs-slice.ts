import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: {
    searchName: '',
    sliderValue: [0, 10],
    tabValue: '',
  },
  pagination: {
    currentPage: 1,
    pageSize: 5,
  },
}

const slice = createSlice({
  initialState,
  name: 'packs',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ newPage: number }>) => {
      state.pagination.currentPage = action.payload.newPage
    },
    setPageSize: (state, action: PayloadAction<{ newPageSize: number }>) => {
      state.pagination.pageSize = action.payload.newPageSize
    },
    setSearchName: (state, action: PayloadAction<{ newSearchName: string }>) => {
      state.filter.searchName = action.payload.newSearchName
    },
    setSliderValue: (state, action: PayloadAction<{ newSliderValue: number[] }>) => {
      state.filter.sliderValue = action.payload.newSliderValue
    },
    setTabValue: (state, action: PayloadAction<{ newTabValue: string }>) => {
      state.filter.tabValue = action.payload.newTabValue
    },
  },
})

export const packsReducer = slice.reducer
export const packsActions = slice.actions
