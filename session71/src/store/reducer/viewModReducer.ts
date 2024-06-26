import { createSlice } from '@reduxjs/toolkit';

const viewModeSlice = createSlice({
  name: 'viewMode',
  initialState:{
    isGridView: true

  },
  reducers: {
    toggleViewMode: (state:any) => {
      state.isGridView = !state.isGridView;
    }
  }
});

export const { toggleViewMode } = viewModeSlice.actions;

export default viewModeSlice.reducer;
