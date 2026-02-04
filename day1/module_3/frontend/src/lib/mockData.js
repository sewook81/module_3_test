// Mock 로그 레벨
const levels = ['success', 'info', 'warning', 'danger']
const levelTexts = {
  success: '정상',
  info: '정보',
  warning: '경고',
  danger: '위험',
}

// Mock IP 주소
const sourceIps = [
  '192.168.1.105',
  '192.168.1.50',
  '10.0.0.45',
  '172.16.0.23',
  '192.168.2.100',
  '10.1.1.67',
  '172.31.255.1',
  '192.168.100.88',
]

// Mock 포트
const ports = [22, 80, 443, 8080, 3306, 5432, 27017, 6379]

// Mock 프로토콜
const protocols = ['TCP', 'UDP', 'ICMP', 'HTTP', 'HTTPS']

// Mock 액션
const actions = ['ALLOWED', 'BLOCKED', 'DROPPED']

// Mock 메시지 템플릿
const messages = {
  success: [
    'Normal HTTP request',
    'Successful connection established',
    'Valid authentication',
    'Database query completed',
    'File transfer successful',
  ],
  info: [
    'Connection attempt from known host',
    'Service started',
    'Configuration updated',
    'Routine maintenance task',
    'System health check',
  ],
  warning: [
    'Multiple failed authentication attempts',
    'High connection rate detected',
    'Unusual traffic pattern',
    'Service temporarily unavailable',
    'Resource usage above threshold',
  ],
  danger: [
    'SSH brute force attempt detected',
    'SQL injection attempt blocked',
    'Malicious payload detected',
    'Unauthorized access attempt',
    'Port scanning detected',
  ],
}

// 랜덤 요소 선택 함수
const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]

// 랜덤 날짜 생성 (최근 30일)
const randomDate = (daysAgo = 30) => {
  const now = new Date()
  const past = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000)
  const random = new Date(past.getTime() + Math.random() * (now.getTime() - past.getTime()))
  return random.toISOString().replace('T', ' ').substring(0, 19)
}

// Mock 로그 생성 함수
const generateMockLog = (id) => {
  const level = randomElement(levels)
  const sourceIp = randomElement(sourceIps)
  const destPort = randomElement(ports)
  const protocol = randomElement(protocols)
  const action = randomElement(actions)
  const message = randomElement(messages[level])
  const timestamp = randomDate()

  return {
    id,
    timestamp,
    level,
    levelText: levelTexts[level],
    sourceIp,
    destIp: '192.168.1.1', // 게이트웨이
    destPort,
    protocol,
    action,
    message,
    bytes: Math.floor(Math.random() * 10000) + 100,
    packets: Math.floor(Math.random() * 100) + 1,
  }
}

// Mock 로그 데이터 생성 (100개)
export const mockLogs = Array.from({ length: 100 }, (_, i) => generateMockLog(i + 1))

// Mock 통계 데이터
export const mockStatistics = {
  totalLogs: mockLogs.length,
  dangerLogs: mockLogs.filter((log) => log.level === 'danger').length,
  warningLogs: mockLogs.filter((log) => log.level === 'warning').length,
  infoLogs: mockLogs.filter((log) => log.level === 'info').length,
  normalLogs: mockLogs.filter((log) => log.level === 'success').length,
}

// 로그 ID로 검색
export const getLogById = (id) => {
  return mockLogs.find((log) => log.id === parseInt(id))
}

// 로그 필터링 함수
export const filterLogs = (logs, filters) => {
  let filtered = [...logs]

  // 레벨 필터
  if (filters.level && filters.level !== 'all') {
    filtered = filtered.filter((log) => log.level === filters.level)
  }

  // IP 주소 검색
  if (filters.ip) {
    filtered = filtered.filter((log) =>
      log.sourceIp.includes(filters.ip) || log.destIp.includes(filters.ip)
    )
  }

  // 메시지 검색
  if (filters.search) {
    filtered = filtered.filter((log) =>
      log.message.toLowerCase().includes(filters.search.toLowerCase())
    )
  }

  // 날짜 범위 필터
  if (filters.startDate) {
    filtered = filtered.filter((log) => log.timestamp >= filters.startDate)
  }
  if (filters.endDate) {
    filtered = filtered.filter((log) => log.timestamp <= filters.endDate)
  }

  return filtered
}

// 페이지네이션 함수
export const paginateLogs = (logs, page = 1, perPage = 20) => {
  const start = (page - 1) * perPage
  const end = start + perPage
  return {
    data: logs.slice(start, end),
    totalPages: Math.ceil(logs.length / perPage),
    currentPage: page,
    total: logs.length,
  }
}
