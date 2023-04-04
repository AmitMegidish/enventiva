import React, { useState, useCallback } from 'react';
import { ICurrency } from '../ts/interfaces';
import Select from './common/Select';
import Button from './common/Button';
import ConversionResult from './ConversionResult';

interface Props {
    currencies: ICurrency[]
}

const Converter: React.FC<Props> = ({ currencies }) => {
    const [formFields, setFormFields] = useState({
        fromCurrency: currencies[149].id,
        toCurrency: currencies[0].id,
        amount: 1
    });

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setIsSubmitted(false);
        setFormFields(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }, []);

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    }, []);

    return (
        <>
            <form
                className='bg-yellow-100 shadow-md p-3 flex gap-3 flex-col items-center w-full max-w-lg rounded-sm'
                onSubmit={handleSubmit}
            >
                <input
                    type="number"
                    min={1}
                    name="amount"
                    value={formFields.amount}
                    onChange={handleChange}
                />
                <Select
                    name='fromCurrency'
                    optionsArray={currencies}
                    value={formFields.fromCurrency}
                    onChange={handleChange}
                />
                <Select
                    name='toCurrency'
                    optionsArray={currencies}
                    value={formFields.toCurrency}
                    onChange={handleChange}
                />
                <Button
                    type='submit'
                    text='CONVERT'
                />
            </form>
            {isSubmitted && (
                <ConversionResult
                    to={formFields.toCurrency}
                    from={formFields.fromCurrency}
                    amount={formFields.amount}
                />
            )}
        </>
    );
}

export default Converter;