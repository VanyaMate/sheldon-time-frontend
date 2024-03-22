'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { boxStyles } from '@/styles/boxes/box';
import { format } from 'date-fns';
import Timer from '../../time/Timer/Timer';


export type UpcomingEventProps =
    {
        title: string;
        description: string;
        timeStart: number;
        duration: number;
        extra?: React.ReactNode;
    }
    & React.ComponentPropsWithoutRef<'div'>;

const UpcomingEvent: React.FC<UpcomingEventProps> = (props) => {
    const { title, description, timeStart, duration, extra, className, ...other } = props;

    return (
        <section { ...other }
                 className={ cn(className, `flex flex-col gap-2 ${ boxStyles }`) }>
            <footer>
                <p className={ 'text-secondary' }>
                    <span>Начало через: </span>
                    <span className={ 'text-foreground' }>
                        <Timer time={ timeStart }/>
                    </span>
                </p>
                <p className={ 'text-secondary' }>
                    <span>Длительность: </span>
                    <span className={ 'text-foreground' }>
                        2 часа 30 минут
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

export default React.memo(UpcomingEvent);