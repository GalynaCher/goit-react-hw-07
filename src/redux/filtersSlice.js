import { createSlice } from "@reduxjs/toolkit"; 

const filtersSlice = createSlice({ 
    name: "filters",
    initialState: { name: "" }, 
    reducers: {
        changeFilter(state, action) { 
            state.name = action.payload;
            console.log("action.payload", action.payload);
        }
    }
});

export const { changeFilter } = filtersSlice.actions; // Actions export

export const selectNameFilter = state => state.filters.name; // Filter export 

export default filtersSlice.reducer; // Reducer export

