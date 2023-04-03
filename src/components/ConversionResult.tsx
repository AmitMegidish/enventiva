import React from 'react';
import { useGetLatestRatesQuery } from '../store/services/currency';
import Spinner from './common/Spinner';

interface Props {
    to: string,
    from: string,
    amount: number
}

const ConversionResult: React.FC<Props> = ({ to, from, amount }) => {
    const { data, isLoading, error } = useGetLatestRatesQuery("");

    console.log(data)

    return (
        <>
            {isLoading && <Spinner />}
            {error && 'status' in error && <h1>{JSON.stringify(error)}</h1>}
            {data && <h1>{data.rates[to] * amount}</h1>}
        </>
    );
}

export default ConversionResult;