import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ads: [],
};

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    createAd: (state, action) => {
      state.ads = action.payload;
    },
    getAd: (state, action)=>{
      state.ads = action.payload;
    }
  },
});

export const createAd = adsSlice.actions.createAd
export const getAd = adsSlice.actions.getAd

const AdsSlice = adsSlice.reducer;
export default AdsSlice;
