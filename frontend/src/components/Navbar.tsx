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
    ChevronLeftIcon,
    ChevronRightIcon,
    BuildingOfficeIcon,
    SunIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline';

const iconMap: Record<string, ReactElement | undefined> = {
    'Company Search': <MagnifyingGlassIcon className="w-10 h-10" />, // 01
    'Companies': <BuildingOfficeIcon className="w-10 h-10" />,
    'Contract Draft': <ClockIcon className="w-10 h-10" />, // 02
    'Contract Approved': <BuildingOffice2Icon className="w-10 h-10" />, // 03
    'Contract Rejected': <QuestionMarkCircleIcon className="w-10 h-10" />, // 04
    'Contract Signed': <UsersIcon className="w-10 h-10" />, // 05
    'Contract Register': <BriefcaseIcon className="w-10 h-10" />, // 06
    'Solution': <DocumentTextIcon className="w-10 h-10" />, // 07
    'Process': <Cog6ToothIcon className="w-10 h-10" />, // 08
    'Only With-Fom': <StarIcon className="w-10 h-10" />, // 09
    'Contract Editor': <ChartBarIcon className="w-10 h-10" />, // 10
    'Payment': <SparklesIcon className="w-10 h-10" />, // 11
    'Payslip': <UserGroupIcon className="w-10 h-10" />, // 12
    'MyPage': <UserCircleIcon className="w-10 h-10" />, // 13
    'Logout': <ArrowRightOnRectangleIcon className="w-10 h-10" />, // 14
    'Farms': <SunIcon className="w-10 h-10" />, // 15
    'Invoice': <GlobeAltIcon className="w-10 h-10" />, // 16
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
    const navRef = React.useRef<HTMLDivElement>(null);
    const [navItems, setNavItems] = useState<NavItem[]>([]);

    const isContractRegisterActive = [
        '/personal/register',
        '/policy/register',
        '/agreement/register',
        '/schedule/register',
        '/guideline/register',
        '/survey/register'
        // 필요하다면 더 추가
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

    // 좌우 스크롤 함수
    const scrollNav = (direction: 'left' | 'right') => {
        if (navRef.current) {
            const scrollAmount = 200; // 한 번에 이동할 픽셀 수
            if (direction === 'left') {
                navRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="w-full z-30 py-0 px-6 flex items-center justify-center">
            <nav className="flex items-center justify-center w-full">
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="메뉴 열기"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className="w-full flex items-center justify-center py-2 bg-white">
                    <button className="p-2 rounded-full transition bg-transparent hover:bg-red-100 cursor-pointer" aria-label="이전" onClick={() => scrollNav('left')}>
                        <ChevronLeftIcon className="w-6 h-6 text-red-300" />
                    </button>
                    <nav ref={navRef} className="flex border border-gray-200 rounded overflow-x-auto scrollbar-hide">
                        {navItems.map((item) => {
                            const isActive =
                                (item.title === 'Contract Register' && isContractRegisterActive) ||
                                pathname === item.href;
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className="flex-1 min-w-[120px]"
                                    onClick={item.title === 'Logout'
                                        ? (e) => {
                                            e.preventDefault();
                                            localStorage.clear();
                                            router.push('/');
                                        }
                                        : undefined
                                    }
                                >
                                    <div
                                        className={`flex flex-col items-center justify-center w-full h-full h-36 w-36 transition-all gap-2
                                            ${isActive
                                                ? 'bg-red-600 text-white'
                                                : 'bg-white text-black border border-gray-200 hover:bg-gray-50'}
                                        `}
                                    >
                                        <span className={`${isActive ? 'text-white' : 'text-black'} mb-2`}>
                                            {iconMap[item.title]}
                                        </span>
                                        <span className={`font-medium ${isActive ? 'text-white' : 'text-black'} break-words whitespace-normal text-center`}>
                                            {item.title.split(' ').map((word: string, idx: number, arr: string[]) => (
                                                idx < arr.length - 1 ? (
                                                    <React.Fragment key={idx}>{word}<br /></React.Fragment>
                                                ) : (
                                                    <React.Fragment key={idx}>{word}</React.Fragment>
                                                )
                                            ))}
                                        </span>
                                        {/* 포인트 메뉴에만 빨간색 숫자 */}
                                        {item.title === '포인트' && (
                                            <span className="text-red-600 ml-1">0</span>
                                        )}
                                    </div>
                                </Link>
                            );
                        })}
                    </nav>
                    <button className="p-2 rounded-full transition bg-transparent hover:bg-red-100 cursor-pointer" aria-label="다음" onClick={() => scrollNav('right')}>
                        <ChevronRightIcon className="w-6 h-6 text-red-300" />
                    </button>
                </div>
            </nav>
            {menuOpen && (
                <div className="md:hidden bg-blue-900 w-full mt-2 rounded shadow-lg py-4 px-2 max-h-[80vh] overflow-y-auto">
                    <ul className="flex flex-col space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className="cursor-pointer transition-all duration-300 hover:text-blue-300 group text-white"
                                onClick={() => setMenuOpen(false)}
                            >
                                <li className="flex flex-col items-start">
                                    <span className="flex items-center text-sm text-white">
                                        {iconMap[item.title]}{item.title}
                                    </span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
} 