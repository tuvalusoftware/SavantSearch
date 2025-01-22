/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { ROUTE_AUTH, ROUTE_HOME } from '@/enums/router';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const { status } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState<boolean>(true);

    const guestRoutes: string[] = [ROUTE_AUTH.LOGIN, ROUTE_AUTH.REGISTER];

    useEffect(() => {
        const isGuestRoute = guestRoutes.some((route) =>
            pathname.includes(route)
        );

        setLoading(true);

        if (status === 'loading') {
            return;
        } else if (status === 'authenticated' && isGuestRoute) {
            router.push(ROUTE_HOME.DEFAULT);
        } else if (status === 'unauthenticated' && !isGuestRoute) {
            router.push(ROUTE_AUTH.LOGIN);
        } else {
            setLoading(false);
        }
    }, [pathname, status]);

    return !loading && children;
}
