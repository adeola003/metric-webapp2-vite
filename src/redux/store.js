import { configureStore } from '@reduxjs/toolkit';
import { countriesReducer } from './countries/countriesSlice'; // Update the import statement

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
