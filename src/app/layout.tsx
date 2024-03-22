import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import React from 'react';


export const metadata: Metadata = {
    title      : 'Sheldon Time',
    description: 'Приложения для управления временем',
};

export type RootLayoutProps = {
    children: React.ReactNode;
}

export default function RootLayout (props: RootLayoutProps) {
    const { children } = props;
    return (
        <html lang="ru">
        <body className={ GeistSans.className }>{ children }</body>
        </html>
    );
}
