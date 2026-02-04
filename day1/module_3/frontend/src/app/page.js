'use client'

import { Card, Badge, Table, Button } from '@/components/common'

// 샘플 로그 데이터
const recentLogs = [
  {
    id: 1,
    timestamp: '2026-02-04 14:23:15',
    level: 'danger',
    levelText: '위험',
    sourceIp: '192.168.1.105',
    destPort: 22,
    message: 'SSH brute force attempt detected',
  },
  {
    id: 2,
    timestamp: '2026-02-04 14:22:48',
    level: 'warning',
    levelText: '경고',
    sourceIp: '10.0.0.45',
    destPort: 443,
    message: 'Multiple failed authentication attempts',
  },
  {
    id: 3,
    timestamp: '2026-02-04 14:21:30',
    level: 'success',
    levelText: '정상',
    sourceIp: '192.168.1.50',
    destPort: 80,
    message: 'Normal HTTP request',
  },
]

// 테이블 컬럼 정의
const columns = [
  { key: 'timestamp', label: '시간', sortable: true },
  {
    key: 'level',
    label: '레벨',
    render: (value, row) => (
      <Badge status={value}>{row.levelText}</Badge>
    ),
  },
  { key: 'sourceIp', label: '소스 IP', sortable: true },
  { key: 'destPort', label: '포트', sortable: true },
  { key: 'message', label: '메시지' },
]

export default function HomePage() {
  const handleRowClick = (row) => {
    console.log('클릭된 로그:', row)
  }

  return (
    <div className="space-y-6">
      {/* 페이지 헤더 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">대시보드</h2>
        <p className="mt-1 text-sm text-gray-600">
          방화벽 로그 모니터링 시스템에 오신 것을 환영합니다.
        </p>
      </div>

      {/* 통계 카드 영역 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 총 로그 카드 */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">총 로그 수</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">1,234</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </Card>

        {/* 위험 로그 카드 */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">위험 로그</p>
              <p className="mt-2 text-3xl font-bold text-danger">56</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
        </Card>

        {/* 경고 로그 카드 */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">경고 로그</p>
              <p className="mt-2 text-3xl font-bold text-warning">123</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </Card>

        {/* 정상 로그 카드 */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">정상 로그</p>
              <p className="mt-2 text-3xl font-bold text-success">1,055</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </Card>
      </div>

      {/* 최근 로그 테이블 */}
      <Card
        title="최근 로그"
        action={
          <Button variant="outline" size="sm">
            전체 보기
          </Button>
        }
      >
        <Table
          columns={columns}
          data={recentLogs}
          onRowClick={handleRowClick}
          sortable={true}
          hoverable={true}
        />
      </Card>
    </div>
  )
}
