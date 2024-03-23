import React from 'react';
import { cn } from '@/lib/utils';
import { formatDistanceStrict } from 'date-fns';
import { ru } from 'date-fns/locale';


export type EventViewProps =
    {
        title: string;
        description: string;
        timeStart: number;
        duration: number;
        isActive?: boolean;
        extra?: React.ReactNode;
    }
    & React.ComponentPropsWithoutRef<'div'>;
;

const EventView: React.FC<EventViewProps> = (props) => {
    const {
              title, description, timeStart, duration, extra, isActive, className,
              ...other
          } = props;

    return (
        <article { ...other }
                 className={
                     cn(
                         className,
                         `flex flex-col gap-2 rounded-xl p-4 border`,
                         isActive ? 'text-primary border-primary' : 'text-secondary',
                     )
                 }
        >
            <footer>
                <p className={ 'text-secondary' }>
                    <span className={ 'text-foreground' }>
                        { formatDistanceStrict(timeStart, timeStart + duration, { locale: ru }) }
                    </span>
                </p>
            </footer>
            <header>
                <h3 className={ 'text-4xl' }>{ title }</h3>
                <p className={ 'text-secondary' }>{ description }</p>
            </header>
            {
                extra
            }
        </article>
    );
};

export default React.memo(EventView);