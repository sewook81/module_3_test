'use client'

export default function Navbar({ onMenuClick, title = '대시보드' }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4">
        {/* 좌측: 햄버거 메뉴 + 페이지 제목 */}
        <div className="flex items-center space-x-4">
          {/* 햄버거 메뉴 버튼 (모바일) */}
          <button
            onClick={onMenuClick}
            className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* 페이지 제목 */}
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
        </div>

        {/* 우측: 알림 + 사용자 프로필 */}
        <div className="flex items-center space-x-4">
          {/* 검색 버튼 (데스크톱) */}
          <button className="hidden md:flex items-center px-3 py-2 text-sm text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>검색...</span>
          </button>

          {/* 알림 아이콘 */}
          <button className="relative text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {/* 알림 배지 */}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-danger rounded-full">
              3
            </span>
          </button>

          {/* 사용자 프로필 */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900">관리자</p>
              <p className="text-xs text-gray-500">admin@example.com</p>
            </div>
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
