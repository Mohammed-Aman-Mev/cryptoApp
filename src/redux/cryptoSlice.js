import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCoin: null,
  searchCoin: null,
  route: "",
  oneCoin: null,
};

export const cryptoSlice = createSlice({
  name: "Crypto",
  initialState,
  reducers: {
    addCoin: (state, action) => {
      state.allCoin = action.payload;
    },

    nameRoute: (state, action) => {
      state.route = action.payload;
    },

    setOneCoin: (state, action) => {
      console.log(action.payload);

      state.oneCoin = action.payload;
    },
    setsearchCoin: (state, action) => {
      console.log(action.payload);
      state.searchCoin = action.payload;
    },
  },
});

export const { addCoin, nameRoute, setOneCoin, setsearchCoin } =
  cryptoSlice.actions;
export default cryptoSlice.reducer;
