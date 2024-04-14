import {AppShell, Burger} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {MainNavBar} from "./LayoutComponents/MainNavBar";
import {TopFrame} from "./LayoutComponents/TopFrame";

export function Layout() {
    const [opened, {toggle}] = useDisclosure();

    return (
        <AppShell
            header={{height: 30}}
            navbar={{
                width: 250,
                breakpoint: 'sm',
                // collapsed: { mobile: !opened },
            }}
            padding="xs"
        >
            <AppShell.Header>
                <div className={"frame_control"} style={{display: "flex", justifyContent: "space-between"}}>
                    {/*<Burger*/}
                    {/*    opened={opened}*/}
                    {/*    onClick={toggle}*/}
                    {/*    hiddenFrom="sm"*/}
                    {/*    size="sm"*/}
                    {/*/>*/}
                    <div>Logo</div>
                    <div><TopFrame/></div>
                </div>
            </AppShell.Header>

            <AppShell.Navbar p="xs">
                <MainNavBar/>
            </AppShell.Navbar>
            <AppShell.Main>
                hello
            </AppShell.Main>
        </AppShell>
    );
}