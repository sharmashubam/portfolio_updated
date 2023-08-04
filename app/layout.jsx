import Navbar from './components/Navbar'
import { ThemeProvider } from './components/ThemeContext'
import './globals.css'

export const metadata = {
  title: 'Shubam Sharma Portfolio',
  description: 'Full Stack Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider >
          <Navbar />
          {children}
        </ThemeProvider>

      </body>
    </html>
  )
}
