import Navbar from './components/Navbar'
import './globals.css'
import {Catamaran} from '@next/font/google'

export const metadata = {
  title: 'Shubam Sharma Portfolio',
  description: 'Full Stack Web Developer',
}

const svd = Catamaran({
  subsets : ['latin'],
  weight: '400',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={svd.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
