import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novus Product Agent',
  description: 'Agent with Novus observability'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0, fontFamily:'system-ui', background:'#fafafa'}}>
        {children}
      </body>
    </html>
  )
}
