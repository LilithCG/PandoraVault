import {AppShell} from '@mantine/core';
import {TopFrame} from "./components/Layout/TopFrame";
import {MainNavBar} from "./components/Layout/MainNavBar";

export function Layout() {

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
          <div>Logso</div>
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
