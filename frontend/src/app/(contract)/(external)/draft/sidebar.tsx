'use client';

import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="sh-sideleft-menu w-64 bg-white border-r min-h-screen p-4">
            <label className="sh-sidebar-label block text-xs font-bold text-gray-500 mb-4">Navigation</label>
            <ul className="nav space-y-2">
                <li className="nav-item">
                    <Link href="/"><a className="nav-link active flex items-center gap-2 text-purple-600 font-semibold">
                        <i className="icon ion-ios-home-outline" />
                        <span>Contract Editor</span>
                    </a></Link>
                </li>
                <li className="nav-item">
                    <div className="nav-link with-sub flex items-center gap-2 cursor-pointer">
                        <i className="icon ion-ios-gear-outline" />
                        <span>Contract Inventory</span>
                    </div>
                    <ul className="nav-sub ml-6 mt-1">
                        <li className="nav-item">
                            <Link href="/api/contract/overview"><a className="nav-link">Contract List</a></Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <div className="nav-link with-sub flex items-center gap-2 cursor-pointer">
                        <i className="icon ion-ios-gear-outline" />
                        <span>Personal</span>
                    </div>
                    <ul className="nav-sub ml-6 mt-1">
                        <li className="nav-item">
                            <Link href="/api/contract/editor/1/abc"><a className="nav-link">1. Personal</a></Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <div className="nav-link with-sub flex items-center gap-2 cursor-pointer">
                        <i className="icon ion-ios-gear-outline" />
                        <span>Policies</span>
                    </div>
                    <ul className="nav-sub ml-6 mt-1">
                        <li className="nav-item">
                            <Link href="/api/contract/editor/2/abc"><a className="nav-link">2. Policies</a></Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <div className="nav-link with-sub flex items-center gap-2 cursor-pointer">
                        <i className="icon ion-ios-gear-outline" />
                        <span>Agreement</span>
                    </div>
                    <ul className="nav-sub ml-6 mt-1">
                        <li className="nav-item">
                            <Link href="/api/contract/editor/3/abc"><a className="nav-link">3. Agreement</a></Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <div className="nav-link with-sub flex items-center gap-2 cursor-pointer">
                        <i className="icon ion-ios-gear-outline" />
                        <span>Schedule</span>
                    </div>
                    <ul className="nav-sub ml-6 mt-1">
                        <li className="nav-item">
                            <Link href="/api/contract/editor/4/abc"><a className="nav-link">4. Schedule</a></Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <div className="nav-link with-sub flex items-center gap-2 cursor-pointer">
                        <i className="icon ion-ios-bookmarks-outline" />
                        <span>Health</span>
                    </div>
                    <ul className="nav-sub ml-6 mt-1">
                        <li className="nav-item">
                            <Link href="/api/contract/editor/5/abc"><a className="nav-link contract-overview">5. Health</a></Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <div className="nav-link with-sub flex items-center gap-2 cursor-pointer">
                        <i className="icon ion-ios-bookmarks-outline" />
                        <span>Survey</span>
                    </div>
                    <ul className="nav-sub ml-6 mt-1">
                        <li className="nav-item">
                            <Link href="/api/contract/editor/6/abc"><a className="nav-link contract-overview">6. Survey</a></Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
}
