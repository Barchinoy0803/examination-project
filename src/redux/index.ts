import { configureStore } from "@reduxjs/toolkit";
import phones from "./features/phone.slice";

export const store = configureStore({
    reducer: {
        phones
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
