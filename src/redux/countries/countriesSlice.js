import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sum = (a, b) => a + b;

export const url = 'https://restcountries.com/v3.1/all';

// function to get all countries

export const getCountries = createAsyncThunk('countries/getList',
  async () => {
    const response = await axios.get(url);
    return response.data;
  });

// function to get countries by code and display country details

export const searchByCode = createAsyncThunk('countries/searchByCode',
  async (code) => {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    return response.data;
  });

// function to implement filter functionnalities and search by region

export const searchByRegion = createAsyncThunk('countries/searchByRegion',
  async (region) => {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    return response.data;
  });

const initialState = {
  countriesData: [],
  region: '',
  loading: false,
  countryResult: [],
  success: false,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.region = '';
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(getCountries.rejected, (state) => {
        state.loading = false;
        state.success = false;
      })
      .addCase(searchByCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.countryResult = action.payload;
        state.success = true;
        console.log(action.payload);
      })
      .addCase(searchByCode.rejected, (state) => {
        state.loading = false;
        state.success = false;
      })
      .addCase(searchByRegion.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
        console.log(action.payload);
      })
      .addCase(searchByRegion.rejected, (state) => {
        state.loading = false;
        state.success = false;
      });
  },
});

export const countriesReducer = countrySlice.reducer;
export default countrySlice;
export const { reset, setRegion } = countrySlice.actions;
