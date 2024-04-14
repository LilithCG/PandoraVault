import './assets/main.css'
import '@mantine/core/styles.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import {MantineProvider} from "@mantine/core";
import {Layout} from "./Layout";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <Layout/>
    </MantineProvider>
    {/*<App />*/}
    sadad
  </React.StrictMode>
)
