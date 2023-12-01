export const metadata = {
  title: 'Aalachi Mohamed - Portfolio',
  description: 'Created using Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </head>
        
      <body>{children}</body>
    </html>
  )
}
