import {createRoot} from "react-dom/client";
import React, {useState} from "react";
import '@mantine/core/styles.css';
import {Button, MantineProvider} from "@mantine/core";

import {Layout} from "./Layout";


function AppWithCallbackAfterRender() {
    // const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    // const toggleColorScheme = (value?: ColorScheme) =>
    //     setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <MantineProvider>
            <Layout/>
        </MantineProvider>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender/>);