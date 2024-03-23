import React from 'react';
import dynamic from 'next/dynamic';
import EventView from '@/components/entities/events/EventView/EventView';
import type { Metadata } from 'next';


const CurrentDate               = dynamic(() => import('@/containers/widgets/date/CurrentDate/CurrentDate'), { ssr: false });
export const metadata: Metadata = {
    title      : 'Sheldon - Список',
    description: 'Приложения для управления временем',
    icons      : {
        icon: '/icons/app/192x192.png',
    },
};


export type PageProps = {};

const Page: React.FC<PageProps> = (props) => {
    const {} = props;

    return (
        <div className={ 'flex flex-col gap-3 pt-[120px]' }>
            <CurrentDate
                className={ 'fixed z-1 top-0 left-0 w-[100%] h-[120px] bg-background' }/>
            <EventView
                title={ 'Завтрак' }
                description={ 'Умыться, завтрак' }
                timeStart={ Date.now() }
                duration={ 1000 * 60 * 60 }
                isActive
            />
            <EventView
                title={ 'Учеба' }
                description={ 'Программирование' }
                timeStart={ Date.now() + 1000 * 60 * 60 }
                duration={ 1000 * 60 * 60 * 3 }
            />
            <EventView
                title={ 'Обед' }
                description={ 'Обед, отдых' }
                timeStart={ Date.now() }
                duration={ 1000 * 60 * 60 }
            />
            <EventView
                title={ 'Учеба' }
                description={ 'Программирование' }
                timeStart={ Date.now() + 1000 * 60 * 60 }
                duration={ 1000 * 60 * 60 * 4 }
            />
            <EventView
                title={ 'Ужин' }
                description={ 'Ужин, отдых' }
                timeStart={ Date.now() }
                duration={ 1000 * 60 * 60 }
            />
            <EventView
                title={ 'Учеба' }
                description={ 'Английский' }
                timeStart={ Date.now() }
                duration={ 1000 * 60 * 30 }
            />
            <EventView
                title={ 'Отдых' }
                description={ '' }
                timeStart={ Date.now() }
                duration={ 1000 * 60 * 60 * 5 }
            />
        </div>
    );
};

export default React.memo(Page);