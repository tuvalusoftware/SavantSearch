import { Toaster } from '@/components/ui/toaster';
import { SubLayout } from '@/layouts/SubLayout';
import { ThemeProvider } from '@/providers/ThemeProvider';
import type { Metadata } from 'next';
import { Orbitron, Poppins } from 'next/font/google';

import './globals.css';

// const fonts = localFont({
//     src: [
//         {
//             path: './fonts/Orbitron-Regular.ttf',
//             weight: '400',
//             style: 'normal'
//         },
//         {
//             path: './fonts/Orbitron-Bold.ttf',
//             weight: '700',
//             style: 'normal'
//         }
//     ]
// });

const orbitron = Orbitron({
    subsets: ['latin'],
    variable: '--font-orbitron'
});
const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-Poppins',
    weight: '400'
});

export const metadata: Metadata = {
    title: 'Sport Betting',
    description: 'The best place to bet on sports.'
};

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${orbitron.variable} ${poppins.variable}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <SubLayout>
                        {children}
                        <Toaster />
                    </SubLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
