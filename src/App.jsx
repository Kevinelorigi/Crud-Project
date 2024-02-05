import React from 'react'
import { ProfileForm } from './components/log/LoginAndRegister'
import { ModeToggle } from './components/switch/theme-toggle'
import { ThemeProvider } from './context/theme-provider'

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ProfileForm />
    </ThemeProvider>
  )
}

export default App
