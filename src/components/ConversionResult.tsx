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

    let conversionText = '';

    if (data) {
        conversionText = `${amount} ${from} = ${data.rates[to] * amount} ${to}`;
    }

    return (
        <>
            <br />
            {isLoading && <Spinner />}
            {error && 'status' in error && <h1>{error.status}</h1>}
            {data && <span>{conversionText}</span>}
        </>
    );
};

export default ConversionResult;