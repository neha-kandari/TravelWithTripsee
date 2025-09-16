import type { Metadata } from 'next'
import './globals.css'
import ContactPopup from './components/ContactPopup'
import { AuthProvider } from '@/contexts/AuthContext'
import PerformanceMonitor from './components/PerformanceMonitor'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Tripsee - Your Travel Adventure',
  description: 'Discover amazing destinations and create unforgettable memories with our curated travel experiences',
  icons: {
    icon: '/assets/flaticon.png',
    shortcut: '/assets/flaticon.png',
    apple: '/assets/flaticon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
          <ContactPopup />
          <PerformanceMonitor />
        </AuthProvider>
        <Script
          id="sw-register"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
} 