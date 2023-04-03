import { configureStore } from '@reduxjs/toolkit';
import { currencyApi } from './services/currency';

export const store = configureStore({
    reducer: {
        [currencyApi.reducerPath]: currencyApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(currencyApi.middleware)
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;