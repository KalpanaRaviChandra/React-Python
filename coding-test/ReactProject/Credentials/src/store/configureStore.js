import { configureStore } from "@reduxjs/toolkit";
import slice from "../slices/slice";

const store = configureStore({
    reducer: {
        slice: slice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;



