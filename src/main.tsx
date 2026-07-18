import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { getCurrentWindow } from '@tauri-apps/api/window'
import './index.css'
import { KanbanCpApp } from './components/app/kanbancp-app'
import { ThemeProvider } from './components/providers/theme-provider'
import { Toaster } from './components/ui/sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <KanbanCpApp />
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
)

requestAnimationFrame(() => {
  getCurrentWindow()
    .show()
    .catch((error) => {
      console.error('Failed to show Tauri window', error)
    })
})
