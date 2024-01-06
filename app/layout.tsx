import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter } from 'next/font/google'
import './globals.css'
import { LeftSidebar } from '@/components/shared/LeftSidebar'
import { Navbar } from '@/components/shared/Navbar'
import { Bottombar } from '@/components/shared/Bottombar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'leafCinema',
  description:
    'Explore movies, TV series, and cast information in this React with Next.js project. Fetching data from The Movie Database (TMDb) API, dive into comprehensive details such as plot summaries, release dates, and actor biographies. Perfect for learning web development, the project invites contributions and is licensed under MIT. Embark on an interactive journey through the world of entertainment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="main-container">
            <LeftSidebar />
            {children}
          </main>
          <Bottombar />
        </ThemeProvider>
      </body>
    </html>
  )
}
