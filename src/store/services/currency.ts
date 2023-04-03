
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
                    app_id: "0aacc787fe4841779f7301e0cdaf4881",
                }
            }),
        })
    })
});

export const { useGetAllCurrenciesQuery, useGetLatestRatesQuery } = currencyApi;