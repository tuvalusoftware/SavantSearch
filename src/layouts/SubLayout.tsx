'use client';
import LoadingPage from '@/app/loading';
import { ROUTE_AUTH } from '@/enums/router';
import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';
import AuthGuard from '@/components/Guards/AuthGuard';

const AuthLayout = dynamic(() => import('./AuthLayout'), {
    loading: () => <LoadingPage />,
    ssr: true
});
const MainLayout = dynamic(() => import('./MainLayout'), {
    loading: () => <LoadingPage />,
    ssr: true
});

export function SubLayout({ children }: { children: React.ReactNode }) {
    const [shouldRender, setShouldRender] = useState<boolean>(false),
        pathname = usePathname(),
        [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        const isAuthRoute = pathname.includes(ROUTE_AUTH.DEFAULT);
        setShouldRender(!isAuthRoute);
        setIsMounted(true);
    }, [pathname]);

    return (
        isMounted && (
            <Suspense fallback={<LoadingPage />}>
                <SessionProvider>
                    <AuthGuard>
                        {shouldRender ? (
                            <MainLayout>{children}</MainLayout>
                        ) : (
                            <AuthLayout>{children}</AuthLayout>
                        )}
                    </AuthGuard>
                </SessionProvider>
            </Suspense>
        )
    );
}
