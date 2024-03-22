'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { boxStyles } from '@/styles/boxes/box';
import Timer from '@/components/entities/time/Timer/Timer';


export type CurrentEventProps =
    {
        title: string;
        description: string;
        timeStart: number;
        duration: number;
        extra?: React.ReactNode;
    }
    & React.ComponentPropsWithoutRef<'div'>;

const CurrentEvent: React.FC<CurrentEventProps> = (props) => {
    const { title, description, timeStart, duration, extra, className, ...other } = props;

    return (
        <section { ...other }
                 className={ cn(className, `flex flex-col gap-2 border-primary ${ boxStyles }`) }
        >
            <footer>
                <p className={ 'text-secondary' }>
                    <span>Осталось: </span>
                    <span className={ 'text-foreground' }>
                        <Timer time={ timeStart + duration }/>
                    </span>
                </p>
            </footer>
            <header>
                <h3 className={ 'text-2xl' }>{ title }</h3>
                <p>{ description }</p>
            </header>
            {
                extra
            }
        </section>
    );
};

export default React.memo(CurrentEvent);