import './assets/main.css'
import '@mantine/core/styles.css'
import 'mantine-react-table/styles.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { Layout } from './Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Folder } from './pages/Folder'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme={'light'}>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/folder/:id" element={<Folder />} />
            </Route>
          </Routes>
        </HashRouter>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
