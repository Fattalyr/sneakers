import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  sneakers: [],
  isLoading: true,
};

export const fetchGETSneakers = createAsyncThunk(
  'sneakers/fetchGETSneakers',
  async (searchValue = '') => {
    const response = await axios.get(
      `https://6161517ee46acd001777c003.mockapi.io/items?search=${searchValue}`,
    );
    return response.data;
  },
);

export const fetchSneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGETSneakers.pending, () => {});
    builder.addCase(fetchGETSneakers.fulfilled, (state, action) => {
      state.sneakers = action.payload;
    });
    builder.addCase(fetchGETSneakers.rejected, () => {
      alert('Запрос не выполнен');
    });
  },
});

export const { setIsLoading } = fetchSneakersSlice.actions;

export default fetchSneakersSlice.reducer;
