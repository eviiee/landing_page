import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '다정',
  description: '우리 가족이 다정해지는 시간',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div className='wrapper'>
            <a href="/">
              {/* TODO : 로고 텍스트 포함 이미지로 변경 */}
              <img src="/Logo.svg" alt="Dajeong" />
            </a>
            <ul className="nav_right">
              <li><a href="/">홈</a></li>
              <li><a href="/#team">다정 팀</a></li>
              <li className='desktop'><a href="https://www.apple.com/" target='_blank'>App Store</a></li>
              <li className='desktop'><a href="https://play.google.com/" target='_blank'>Google Play</a></li>
              <li className="mobile tablet"><a href="https://www.apple.com/" target='_blank'>어플 설치</a></li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
