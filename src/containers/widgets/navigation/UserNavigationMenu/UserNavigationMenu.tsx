import React from 'react';
import Link from 'next/link';
import {
    CalendarIcon, HamburgerMenuIcon,
    HomeIcon,
    ListBulletIcon,
    PersonIcon,
    PlusIcon,
} from '@radix-ui/react-icons';
import { Button, buttonVariants } from '@/components/shadcn/ui/button';
import { cn } from '@/lib/utils';


export type UserNavigationMenuProps = {};

const UserNavigationMenu: React.FC<UserNavigationMenuProps> = (props) => {
    const {} = props;
    return (
        <div className={ 'p-2 flex flex-row gap-2 justify-center' }>
            <Link
                href={ '/' }
                className={
                    cn(
                        buttonVariants({
                            variant: 'outline',
                        }),
                        'size-14',
                    )
                }
                aria-label={ 'Домой' }
            >
                <HomeIcon/>
            </Link>
            <Link
                href={ '/calendar' }
                className={
                    cn(
                        buttonVariants({
                            variant: 'outline',
                        }),
                        'size-14',
                    )
                }
                aria-label={ 'Календарь' }
            >
                <CalendarIcon/>
            </Link>
            <Button
                aria-label={ 'Создать новую задачу' }
                className={
                    cn(
                        buttonVariants({
                            variant: 'default',
                        }),
                        'size-14',
                    )
                }
            >
                <PlusIcon/>
            </Button>
            <Link
                href={ '/profile' }
                className={
                    cn(
                        buttonVariants({
                            variant: 'outline',
                        }),
                        'size-14',
                    )
                }
                aria-label={ 'Профиль' }
            >
                <PersonIcon/>
            </Link>
            <Button
                variant={ 'outline' }
                aria-label={ 'Меню' }
                className={
                    cn(
                        buttonVariants({
                            variant: 'outline', size: 'icon',
                        }),
                        'size-14',
                    )
                }
            >
                <HamburgerMenuIcon/>
            </Button>
        </div>
    );
};

export default React.memo(UserNavigationMenu);