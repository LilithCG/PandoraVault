import './assets/main.css'
import '@mantine/core/styles.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import {MantineProvider} from "@mantine/core";
import {Layout} from "./Layout";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme={"dark"}>
        <Layout/>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
