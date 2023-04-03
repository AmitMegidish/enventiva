import React from 'react';
import { ICurrency } from '../ts/interfaces';

interface Props {
    currencies: ICurrency[]
}

const Converter: React.FC<Props> = ({ currencies }) => {

    return (
        <form className='bg-red-400 p-2 flex flex-col items-center w-full max-w-lg min-h-[300px] rounded-sm'>
            {JSON.stringify(currencies)}
        </form>
    )
}
export default Converter