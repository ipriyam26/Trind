import "../styles/globals.css";

import Header from './header';

// import Bebas Neue from 'next/font/google'
// import { Bebas Neue } from "next/font/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
<Header></Header>
      <head />
      <body>{children}</body>
    </html>
  )
}
