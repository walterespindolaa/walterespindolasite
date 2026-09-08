import type { Metadata, Viewport } from 'next';
import { Familjen_Grotesk, IBM_Plex_Mono, Newsreader, Alex_Brush } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';

import '@/styles/globals.css';

const inter = Familjen_Grotesk({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = IBM_Plex_Mono({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Newsreader({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const signature = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-signature',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Walter Espindola | Empresário · Construtor de Sistemas · Assessor de Investimentos',
        template: '%s | Walter Espindola',
    },
    description: 'CEO da Zephyr Investimentos, construtor de três sistemas e assessor de investimentos de alta renda. Conheça a trajetória, os sistemas e as formas de trabalhar comigo.',
    keywords: ['Walter Espindola', 'Zephyr Investimentos', 'assessor de investimentos', 'alta renda', 'construtor de sistemas', 'SaaS', 'Atlas', 'mentoria'],
    authors: [{ name: 'Walter Espindola' }],
    creator: 'Walter Espindola',
    metadataBase: new URL('https://www.walterespindola.com.br'),
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://www.walterespindola.com.br',
        title: 'Walter Espindola | Empresário · Construtor de Sistemas · Assessor de Investimentos',
        description: 'Empresário, construtor de sistemas e assessor de investimentos de alta renda.',
        siteName: 'Walter Espindola',
        images: [{ url: '/og2.png', width: 1200, height: 630, alt: 'Walter Espindola' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Walter Espindola | Empresário · Construtor de Sistemas · Assessor de Investimentos',
        description: 'Empresário, construtor de sistemas e assessor de investimentos de alta renda.',
        images: ['/og2.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon-32.png', media: '(prefers-color-scheme: light)' },
            { url: '/favicon-32.png', media: '(prefers-color-scheme: dark)' },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#F4F0E7' },
        { media: '(prefers-color-scheme: dark)', color: '#001F27' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ArcPreloaderWrapper } from '@/components/layout/ArcPreloaderWrapper';
import { ChatBot } from '@/components/layout/ChatBot';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <ArcPreloaderWrapper>
                                    <ConditionalNavigation>
                                        {children}
                                    </ConditionalNavigation>
                                </ArcPreloaderWrapper>
                                <ChatBot headless />
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
