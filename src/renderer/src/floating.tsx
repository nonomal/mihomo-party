import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { HeroUIProvider } from '@heroui/react'
import '@renderer/assets/floating.css'
import FloatingApp from '@renderer/FloatingApp'
import BaseErrorBoundary from './components/base/base-error-boundary'
import { AppConfigProvider } from './hooks/use-app-config'
import { ControledMihomoConfigProvider } from './hooks/use-controled-mihomo-config'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeroUIProvider>
      <NextThemesProvider attribute="class" enableSystem defaultTheme="dark">
        <BaseErrorBoundary>
          <AppConfigProvider>
            <ControledMihomoConfigProvider>
              <FloatingApp />
            </ControledMihomoConfigProvider>
          </AppConfigProvider>
        </BaseErrorBoundary>
      </NextThemesProvider>
    </HeroUIProvider>
  </React.StrictMode>
)
