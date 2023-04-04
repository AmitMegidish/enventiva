
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = "https://openexchangerates.org/api/";

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getAllCurrencies: builder.query<Record<string, string>, string>({
            query: () => "currencies.json",
        }),
        getLatestRates: builder.query({
            query: () => ({
                url: `latest.json`,
                params: {
                    app_id: import.meta.env.VITE_APP_ID,
                }
            }),
        })
    })
});

export const { useGetAllCurrenciesQuery, useGetLatestRatesQuery } = currencyApi;