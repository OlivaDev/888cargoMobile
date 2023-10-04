import Link from 'next/link'
import './globals.css'
import TagForm from './component/tagForm'


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <title>888Cargo</title>
      </head>
      <body>
        <header>
          <nav>
            <Link href="/">Inicio </Link>
            <Link href="/login">Login</Link>
          </nav>
          
        </header>

        <TagForm></TagForm>
        {children}
      </body>
    </html>
  )
}
