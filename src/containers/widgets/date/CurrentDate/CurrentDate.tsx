'use client';

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { cn } from '@/lib/utils';


export type CurrentDateProps =
    {
        initialDate?: Date | number | string;
    }
    & React.ComponentPropsWithoutRef<'div'>;

const CurrentDate: React.FC<CurrentDateProps> = (props) => {
    const { initialDate, className, ...other } = props;
    const [ date, setDate ]                    = useState<Date>(new Date(initialDate ?? Date.now()));

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDate(new Date());
        }, 250);

        return () => clearTimeout(timeout);
    }, [ date ]);

    return (
        <div
            className={ cn(className, `flex flex-col gap-0.5 items-center rounded-xl p-4`) }>
            <p className={ 'text-sm text-secondary font-bold' }>
                { format(date, 'dd MMMM yyyy', { locale: ru }) }
            </p>
            <p className={ 'text-6xl' }>
                { format(date, 'kk:mm:ss') }
            </p>
        </div>
    );
};

export default React.memo(CurrentDate);