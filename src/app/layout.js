import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'imdb | home',
  description: 'This is a imdb clone website ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />
        {/* Navbar */}
        {/* SearchBox */}
        {children}
        </body>
    </html>
  )
}
