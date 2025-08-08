'use client';

import { usePathname } from 'next/navigation';
import Footer from '../common/Footer';

export default function FooterWrapper() {
    const pathname = usePathname();

    const hideFooterPaths = ['/post/create', '/post/edit'];

    if (hideFooterPaths.includes(pathname)) {
        return null;
    }

    return <Footer />;
}