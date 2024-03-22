'use client';

import { formatDistance, formatDistanceStrict } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { ru } from 'date-fns/locale';


export type TimerProps = {
    time: number;
};

const Timer: React.FC<TimerProps> = (props) => {
    const { time }                  = props;
    const [ distance, setDistance ] = useState<string>('');

    useEffect(() => {
        const updateDistance = setInterval(() => {
            setDistance(formatDistanceStrict(new Date(time), Date.now(), { locale: ru }));
        }, 500);

        return () => clearInterval(updateDistance);
    }, []);

    return distance;
};

export default React.memo(Timer);