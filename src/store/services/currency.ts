
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = "https://openexchangerates.org/api/";

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getAllCurrencies: builder.query<any, string>({
            query: () => "currencies.json",
        }),
    })
});

export const { useGetAllCurrenciesQuery } = currencyApi;