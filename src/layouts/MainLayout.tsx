import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Layouts/Header'), {
    ssr: false
});
const Footer = dynamic(() => import('../components/Layouts/Footer'), {
    ssr: false
});

export default function MainLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col justify-between h-full">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
