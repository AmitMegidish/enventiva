import React, { useMemo } from 'react';
import Converter from '../components/Converter';
import { useGetAllCurrenciesQuery } from '../store/services/currency';
import Spinner from '../components/common/Spinner';

const ConverterPage: React.FC = () => {
    const { data: currenciesDictionary, isLoading, error } = useGetAllCurrenciesQuery("");

    const currencies = useMemo(() => {
        if (!currenciesDictionary) {
            return undefined;
        }

        return Object.keys(currenciesDictionary).map(key => ({
            id: key,
            value: currenciesDictionary[key]
        }));
    }, [currenciesDictionary]);

    return (
        <>
            <span className='text-lg'>Currency conversion</span>
            {error && 'status' in error && <h1> {error.status}</h1 >}
            {isLoading && <Spinner text='Loading currencies...' />}
            {currencies && <Converter currencies={currencies} />}
        </>
    );
};

export default ConverterPage;