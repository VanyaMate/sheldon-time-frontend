import React from 'react';
import dynamic from 'next/dynamic';
import UpcomingEvent from '@/components/entities/events/UpcomingEvent/UpcomingEvent';
import CurrentEvent from '@/components/entities/events/CurrentEvent/CurrentEvent';
import { DividerHorizontalIcon } from '@radix-ui/react-icons';


const CurrentDate = dynamic(() => import('@/containers/widgets/date/CurrentDate/CurrentDate'), { ssr: false });


export type PageProps = {};

const Page: React.FC<PageProps> = (props) => {
    const {} = props;

    return (
        <div className={ 'flex flex-col gap-3' }>
            <CurrentDate/>
            <CurrentEvent
                title={ 'Сделать компонент' }
                description={ 'Upcoming component который отображает следующую задачу' }
                timeStart={ Date.now() }
                duration={ 1000 * 60 * 30 }
            />
            <UpcomingEvent
                title={ 'Сделать компонент' }
                description={ 'Upcoming component который отображает следующую задачу' }
                timeStart={ Date.now() + 21342 }
                duration={ 1000 * 60 * 30 }
            />
            <UpcomingEvent
                title={ 'Обед' }
                description={ '' }
                timeStart={ Date.now() + 2131233 }
                duration={ 1000 * 60 * 30 }
            />
            <UpcomingEvent
                title={ 'Сделать компонент' }
                description={ 'Upcoming component который отображает следующую задачу' }
                timeStart={ Date.now() + 2434252 }
                duration={ 1000 * 60 * 30 }
            />
            <UpcomingEvent
                title={ 'Сделать компонент' }
                description={ 'Upcoming component который отображает следующую задачу' }
                timeStart={ Date.now() + 21342323 }
                duration={ 1000 * 60 * 30 }
            />
            <UpcomingEvent
                title={ 'Сделать компонент' }
                description={ 'Upcoming component который отображает следующую задачу' }
                timeStart={ Date.now() + 21342123123 }
                duration={ 1000 * 60 * 30 }
            />
            <UpcomingEvent
                title={ 'Сделать компонент' }
                description={ 'Upcoming component который отображает следующую задачу' }
                timeStart={ Date.now() + 31342123123 }
                duration={ 1000 * 60 * 30 }
            />
        </div>
    );
};

export default React.memo(Page);