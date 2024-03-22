import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import React from 'react';
import { ThemeProvider } from '@/providers/theme/ThemeProvider';
import UserNavigationMenu
    from '@/containers/widgets/navigation/UserNavigationMenu/UserNavigationMenu';
import { cn } from '@/lib/utils';


export const metadata: Metadata = {
    title      : 'Sheldon',
    description: 'Приложения для управления временем',
    manifest   : '/manifest.json',
};

export type RootLayoutProps = {
    children: React.ReactNode;
}

export default function RootLayout (props: RootLayoutProps) {
    const { children } = props;
    return (
        <html lang="ru">
        <body className={ cn(GeistMono.className) }>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <main className={ 'p-2 max-w-screen-lg m-auto pb-[72px]' }>
                { children }
            </main>
            <header className={ 'fixed bottom-0 w-[100%] bg-background' }>
                <UserNavigationMenu/>
            </header>
        </ThemeProvider>
        </body>
        </html>
    );
}
