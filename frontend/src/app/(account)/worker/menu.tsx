'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function WorkerMenu() {
    // 예시: 로그인 유저 정보 (실제 데이터 연동 필요)
    const loginUser = {
        fullname: 'loginUser',
        email: 'unknown@domain.com',
        profileImage: null, // 실제 이미지 경로로 대체
    };

    return (
        <section className="sh-headpanel flex justify-between items-center px-4 py-2 bg-white shadow">
            {/* 왼쪽 네비게이션 */}
            <div className="sh-headpanel-left flex items-center gap-2">
                {/* <Link href="/api/home" className="sh-icon-link flex items-center gap-1">
          <i className="icon ion-home" />
          <span>Home</span>
        </Link> */}
                <a href="#" className="sh-icon-link flex items-center gap-1">
                    <i className="icon ion-star" />
                    <span>Contracts</span>
                </a>
                <a href="#" className="sh-icon-link flex items-center gap-1">
                    <i className="icon ion-ios-folder-outline" />
                    <span>PDFs</span>
                </a>
                <a href="#" className="sh-icon-link flex items-center gap-1">
                    <i className="icon ion-happy-outline" />
                    <span>My Page</span>
                </a>
                <Link href="/api/company/search" className="sh-icon-link flex items-center gap-1">
                    <i className="icon ion-ios-filing" />
                    <span>Company</span>
                </Link>
                {/* 모바일용 드롭다운 */}
                <div className="dropdown dropdown-app-list ml-2">
                    <a href="#" className="dropdown-link">
                        <i className="icon ion-ios-keypad tx-18" />
                    </a>
                    <div className="dropdown-menu">
                        <div className="flex">
                            <a href="#" className="dropdown-menu-link flex-1 flex flex-col items-center">
                                <i className="icon ion-ios-folder-outline" />
                                <span>Directory</span>
                            </a>
                            <a href="#" className="dropdown-menu-link flex-1 flex flex-col items-center">
                                <i className="icon ion-ios-calendar-outline" />
                                <span>Events</span>
                            </a>
                            <Link href="/api/worker/overview" className="dropdown-menu-link flex-1 flex flex-col items-center">
                                <i className="icon ion-ios-gear-outline" />
                                <span>Settings</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* 오른쪽 알림/프로필 */}
            <div className="sh-headpanel-right flex items-center gap-4">
                {/* 메일함 */}
                <div className="dropdown">
                    <a href="#" className="dropdown-link dropdown-link-notification anchor__mailbox">
                        <i className="icon ion-ios-filing-outline tx-24" />
                    </a>
                </div>
                {/* 알림벨 */}
                <div className="dropdown dropdown-notification">
                    <a href="#" className="dropdown-link dropdown-link-notification">
                        <i className="icon ion-ios-bell-outline tx-24" />
                        <span className="square-8"></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-menu-header flex justify-between items-center">
                            <label>Notifications</label>
                            <a href="#" className="anchor__notification text-xs">Mark All as Read</a>
                        </div>
                        <div className="media-list">
                            {/* 알림 예시 */}
                            <a href="#" className="media-list-link read">
                                <div className="media flex items-center gap-3 p-3">
                                    <Image
                                        src="/img/auth/external/worker/Jaxon_Park.jpg"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-full"
                                        alt=""
                                    />
                                    <div>
                                        <p className="text-sm mb-0">
                                            <strong>Suzzeth Bungaos</strong> tagged you and 18 others in a post.
                                        </p>
                                        <span className="text-xs">October 03, 2017 8:45am</span>
                                    </div>
                                </div>
                            </a>
                            {/* ...다른 알림도 동일하게 추가 */}
                        </div>
                    </div>
                </div>
                {/* 프로필 */}
                <div className="dropdown dropdown-profile">
                    <button type="button" className="dropdown-link">
                        <Image
                            src={loginUser.profileImage || "/img/auth/external/worker/Minji_Park.jpg"}
                            width={56}
                            height={56}
                            className="w-14 h-14 rounded-full"
                            alt=""
                        />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="media flex items-center gap-3 p-3">
                            <Image
                                src={loginUser.profileImage || "/img/auth/external/worker/Minji_Park.jpg"}
                                width={56}
                                height={56}
                                className="w-14 h-14 rounded-full"
                                alt=""
                            />
                            <div>
                                <h6 className="text-base font-bold mb-1">{loginUser.fullname || "Unknown User"}</h6>
                                <p className="text-xs mb-0">{loginUser.email || "unknown@domain.com"}</p>
                            </div>
                        </div>
                        <hr />
                        <ul className="dropdown-profile-nav">
                            <li>
                                <a href="#" className="anchor__editProfile flex items-center gap-2">
                                    <i className="icon ion-ios-person" /> Edit Profile
                                </a>
                            </li>
                            <li>
                                <a href="#" className="anchor__logout flex items-center gap-2">
                                    <i className="icon ion-power" /> Sign Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
