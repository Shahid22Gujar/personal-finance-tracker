import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  reportData: [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
  ],
};

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    handleAddReports: (state, action) => {
      const { newReportData } = action.payload;
      state.reportData = [...state.reportData, newReportData];
    },
  },
});

export const { handleAddReports } = reportsSlice.actions;
export default reportsSlice.reducer;
