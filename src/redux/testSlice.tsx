import { createSlice } from "@reduxjs/toolkit";
//import PayloadAction in case you're using Typescript
import type { PayloadAction } from "@reduxjs/toolkit";

interface Item  {
      currentStatus: string,
      bookingStatus: string,
      coachNumber: string
    }


export const testSlice = createSlice({
  name: "testData",
  initialState: {},
  reducers: {
    //in case of typescript -
    //adding the type of payload action(data) we need to pass to this reducer (function).
    test: (state: any, action: PayloadAction<Item[]>) => {
        state.data = action.payload;
    },
  },
});

export const { test } = testSlice.actions;

export default testSlice.reducer;
