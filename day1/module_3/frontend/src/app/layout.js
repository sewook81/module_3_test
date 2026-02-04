import './globals.css'
import Layout from '@/components/layout/Layout'

export const metadata = {
  title: '방화벽 로그 모니터링',
  description: '실시간 방화벽 로그 모니터링 및 분석 시스템',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
