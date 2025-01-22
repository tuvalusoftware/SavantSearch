'use client';

import { Menu } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CustomButton from '../Buttons/CusdtomButton';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const ThemeToggle = dynamic(() => import('../ModeToggle/ThemeToggle'));

export default function Nav() {
    const navItems = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Services',
            link: '/services'
        },
        {
            title: 'Contact',
            link: '/contact'
        }
    ];

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-background dark:bg-background-dark shadow-md' : 'bg-transparent'}`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-text dark:text-text-dark"
                        >
                            Next Tailwind
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-4">
                        {navItems.map(({ title, link }) => (
                            <Link
                                key={link}
                                href={link}
                                className="text-text dark:text-text-dark hover:text-primary transition-colors"
                            >
                                {title}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden md:flex items-center gap-3">
                        <CustomButton>Get Started</CustomButton>
                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <CustomButton>
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </CustomButton>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="flex flex-col space-y-4">
                                    {navItems.map(({ title, link }) => (
                                        <Link
                                            key={link}
                                            href={link}
                                            className="text-foreground hover:text-primary transition-colors"
                                        >
                                            {title}
                                        </Link>
                                    ))}
                                    <CustomButton className="w-full">
                                        Get Started
                                    </CustomButton>
                                    <ThemeToggle />
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
