import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBestCoffees } from "../../api/CoffeeApi";


export const fetchBestCoffees = createAsyncThunk(
    "bestCoffees/fetchBestCoffees",
    async () => {
        try{
            const response = await getBestCoffees();
            return response;
        }catch (error) {
            console.error("Error fetching best coffees:", error);
            throw error;
        }
    }
)



export const BestProductSlice = createSlice({
    name:"BestProduct",
    initialState: {
        value: [],
        status: "idle",
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBestCoffees.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBestCoffees.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.value = action.payload;
            })
            .addCase(fetchBestCoffees.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const {} = BestProductSlice.actions;


export default BestProductSlice.reducer;