import {Divider, NavLink, ScrollArea} from "@mantine/core";
import {IconHome} from "@tabler/icons-react";

const NAV_LINK_PADDING = 2

export const MainNavBar = () => {
  return (
    <>

      <NavLink leftSection={<IconHome size="1rem" stroke={1.5}/>} label="Главная" href="#required-for-focus"/>
      <Divider label={"Хранилище"}/>
      <ScrollArea offsetScrollbars>
        <NavLink
          href="#required-for-focus"
          label="раз"
          p={NAV_LINK_PADDING}
          childrenOffset={4}
        >
          <NavLink href="#required-for-focus" label="First child link" p={NAV_LINK_PADDING}/>
          <NavLink label="Second child link" href="#required-for-focus" p={NAV_LINK_PADDING}/>
          <NavLink label="Nested parent link" p={NAV_LINK_PADDING} href="#required-for-focus"/>
        </NavLink>
        <NavLink label="бом" href="#required-for-focus" p={NAV_LINK_PADDING}/>
        <NavLink label="бом" href="#required-for-focus" p={NAV_LINK_PADDING}/>
        <NavLink label="бом" href="#required-for-focus" p={NAV_LINK_PADDING}/>
        <NavLink label="бом" href="#required-for-focus" p={NAV_LINK_PADDING}/>
        <NavLink label="бом" href="#required-for-focus" p={NAV_LINK_PADDING}/>
        <NavLink label="бом" href="#required-for-focus" p={NAV_LINK_PADDING}/>
        <NavLink label="бом" href="#required-for-focus" p={NAV_LINK_PADDING}/>
        <NavLink label="бом" href="#required-for-focus" p={NAV_LINK_PADDING}/>
        <NavLink label="бом" href="#required-for-focus" p={NAV_LINK_PADDING}/>
        <NavLink label="бом" href="#required-for-focus" p={NAV_LINK_PADDING}/>
      </ScrollArea>
    </>
  )
}
