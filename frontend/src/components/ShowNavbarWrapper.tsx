"use client";
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ShowNavbarWrapper() {
    const pathname = usePathname();
    if (pathname === '/') return null;
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50 }}>
            <Navbar />
        </div>
    );
} 