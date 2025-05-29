'use client';

import React, { useState, ReactElement, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    MagnifyingGlassIcon,
    ClockIcon,
    BuildingOffice2Icon,
    QuestionMarkCircleIcon,
    UsersIcon,
    BriefcaseIcon,
    DocumentTextIcon,
    Cog6ToothIcon,
    ChartBarIcon,
    StarIcon,
    SparklesIcon,
    UserGroupIcon,
    UserCircleIcon,
    ArrowRightOnRectangleIcon,
    BuildingOfficeIcon,
    SunIcon,
    GlobeAltIcon,
    HomeIcon
} from '@heroicons/react/24/outline';

const iconMap: Record<string, ReactElement | undefined> = {
    'Company Search': <MagnifyingGlassIcon className="w-4 h-4" />,
    'Companies': <BuildingOfficeIcon className="w-4 h-4" />,
    'Contract Draft': <ClockIcon className="w-4 h-4" />,
    'Contract Approved': <BuildingOffice2Icon className="w-4 h-4" />,
    'Contract Rejected': <QuestionMarkCircleIcon className="w-4 h-4" />,
    'Contract Signed': <UsersIcon className="w-4 h-4" />,
    'Contract Register': <BriefcaseIcon className="w-4 h-4" />,
    'Solution': <DocumentTextIcon className="w-4 h-4" />,
    'Process': <Cog6ToothIcon className="w-4 h-4" />,
    'Only With-Fom': <StarIcon className="w-4 h-4" />,
    'Contract Editor': <ChartBarIcon className="w-4 h-4" />,
    'Payment': <SparklesIcon className="w-4 h-4" />,
    'Payslip': <UserGroupIcon className="w-4 h-4" />,
    'MyPage': <UserCircleIcon className="w-4 h-4" />,
    'Logout': <ArrowRightOnRectangleIcon className="w-4 h-4" />,
    'Farms': <SunIcon className="w-4 h-4" />,
    'Invoice': <GlobeAltIcon className="w-4 h-4" />,
    'Moment of With-Fom': <StarIcon className="w-4 h-4" />,
    'With-Fom Partner': <UserGroupIcon className="w-4 h-4" />,
    'Expected Effect': <ChartBarIcon className="w-4 h-4" />,
};

// navItems 타입 정의
interface NavItem {
    id: string;
    title: string;
    href: string;
}

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const [navItems, setNavItems] = useState<NavItem[]>([]);

    const isContractRegisterActive = [
        '/personal/register',
        '/policy/register',
        '/agreement/register',
        '/schedule/register',
        '/guideline/register',
        '/survey/register'
    ].some(path => pathname.startsWith(path));

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userRole = localStorage.getItem('role');
            let items: NavItem[] = [];
            switch (userRole) {
                case 'worker':
                    items = [
                        { id: '01', title: 'Company Search', href: '/company/search' },
                        { id: '02', title: 'Contract Register', href: '/personal/register' },
                        { id: '03', title: 'Contract Draft', href: '/draft/overview' },
                        { id: '13', title: 'MyPage', href: '/worker/editor' },
                        { id: '14', title: 'Logout', href: '/' },
                    ];
                    break;
                case 'chief':
                    items = [
                        { id: '01', title: 'Companies', href: '/company/overview' },
                        { id: '02', title: 'Contract Register', href: '/personal/register' },
                        { id: '03', title: 'Contract Draft', href: '/draft/overview' },
                        { id: '04', title: 'Contract Approved', href: '/approved/overview' },
                        { id: '05', title: 'Contract Rejected', href: '/rejected/overview' },
                        { id: '13', title: 'MyPage', href: '/chief/editor' },
                        { id: '14', title: 'Logout', href: '/' },
                    ];
                    break;
                case 'manager':
                    items = [
                        { id: '01', title: 'Companies', href: '/company/overview' },
                        { id: '02', title: 'Contract Register', href: '/personal/register' },
                        { id: '03', title: 'Contract Draft', href: '/draft/overview' },
                        { id: '04', title: 'Contract Approved', href: '/approved/overview' },
                        { id: '05', title: 'Contract Rejected', href: '/rejected/overview' },
                        { id: '06', title: 'Contract Signed', href: '/signed/overview' },
                        { id: '07', title: 'Contract Editor', href: '/personal/editor' },
                        { id: '08', title: 'Farms', href: '/farm/overview' },
                        { id: '09', title: 'Payslip', href: '/payslip/overview' },
                        { id: '10', title: 'Payment', href: '/payment/overview' },
                        { id: '11', title: 'Moment of With-Fom', href: '/momentOfFom' },
                        { id: '12', title: 'With-Fom Partner', href: '/partners' },
                        { id: '13', title: 'MyPage', href: '/manager/editor' },
                        { id: '14', title: 'Logout', href: '/' },
                    ];
                    break;
                case 'supervisor':
                    items = [
                        { id: '01', title: 'Companies', href: '/company/overview' },
                        { id: '02', title: 'Contract Register', href: '/personal/register' },
                        { id: '03', title: 'Contract Draft', href: '/draft/overview' },
                        { id: '04', title: 'Contract Approved', href: '/approved/overview' },
                        { id: '05', title: 'Contract Rejected', href: '/rejected/overview' },
                        { id: '06', title: 'Contract Signed', href: '/signed/overview' },
                        { id: '07', title: 'Solution', href: '/solution' },
                        { id: '08', title: 'Process', href: '/process' },
                        { id: '09', title: 'Only With-Fom', href: '/onlyFom' },
                        { id: '10', title: 'Expected Effect', href: '/expectedEffect' },
                        { id: '11', title: 'Moment of With-Fom', href: '/momentOfFom' },
                        { id: '12', title: 'With-Fom Partner', href: '/partners' },
                        { id: '13', title: 'MyPage', href: '/supervisor/editor' },
                        { id: '14', title: 'Logout', href: '/' },
                    ];
                    break;
                default:
                    items = [
                        { id: '01', title: 'Company Search', href: '/company/search' },
                        { id: '14', title: 'Logout', href: '/' },
                    ];
            }
            setNavItems(items);
        }
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full bg-blue-900 z-30 py-4 px-6">
            <nav className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="text-white font-bold text-lg flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
                    <HomeIcon className="w-5 h-5" />
                    Home
                </div>
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="메뉴 열기"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <ul className="hidden md:flex space-x-4 overflow-x-auto">
                    {navItems.map((item) => {
                        const isActive =
                            (item.title === 'Contract Register' && isContractRegisterActive) ||
                            pathname === item.href;
                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                className="cursor-pointer transition-all duration-300 hover:text-blue-300 hover:scale-105 group flex-shrink-0"
                                onClick={item.title === 'Logout'
                                    ? (e) => {
                                        e.preventDefault();
                                        localStorage.clear();
                                        router.push('/');
                                    }
                                    : undefined
                                }
                            >
                                <li className="flex flex-col items-center min-w-[80px] cursor-pointer">
                                    <span className={`text-lg font-bold hidden ${isActive ? 'text-blue-300 underline' : 'group-hover:underline text-white'}`}>
                                        {item.id}
                                    </span>
                                    <div className="flex items-center gap-1 mt-1 cursor-pointer">
                                        <span className={`${isActive ? 'text-blue-300' : 'text-white'} cursor-pointer`}>
                                            {iconMap[item.title]}
                                        </span>
                                        <span className={`text-xs text-center ${isActive ? 'text-blue-300' : 'text-white'} cursor-pointer`}>
                                            {item.title}
                                        </span>
                                    </div>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
            {menuOpen && (
                <div className="md:hidden bg-blue-900 w-full mt-2 rounded shadow-lg py-4 px-2 max-h-[80vh] overflow-y-auto">
                    <ul className="flex flex-col space-y-2">
                        {navItems.map((item) => {
                            const isActive =
                                (item.title === 'Contract Register' && isContractRegisterActive) ||
                                pathname === item.href;
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className="cursor-pointer transition-all duration-300 hover:text-blue-300 group"
                                    onClick={(e) => {
                                        setMenuOpen(false);
                                        if (item.title === 'Logout') {
                                            e.preventDefault();
                                            localStorage.clear();
                                            router.push('/');
                                        }
                                    }}
                                >
                                    <li className="flex items-center gap-3 p-2 cursor-pointer">
                                        <span className={`text-lg font-bold hidden ${isActive ? 'text-blue-300 underline' : 'group-hover:underline text-white'}`}>
                                            {item.id}
                                        </span>
                                        <div className="flex items-center gap-2 cursor-pointer">
                                            <span className={`${isActive ? 'text-blue-300' : 'text-white'} cursor-pointer`}>
                                                {iconMap[item.title]}
                                            </span>
                                            <span className={`text-sm ${isActive ? 'text-blue-300' : 'text-white'} cursor-pointer`}>
                                                {item.title}
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
} 