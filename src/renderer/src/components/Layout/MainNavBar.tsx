import {Divider, NavLink, ScrollArea} from "@mantine/core";
import {IconHome} from "@tabler/icons-react";
import {FolderHooks} from "../../hooks/FolderHooks";
import useFindMany = FolderHooks.useFindMany;
import {Tree} from "./folderTree/Tree";


export const MainNavBar = () => {
  const {data} = useFindMany()

  console.log(data)


  return (
    <>
      <NavLink leftSection={<IconHome size="1rem" stroke={1.5}/>} label="Главная"
        onClick={() => window.api.link.findMany().then(r => console.log(r))}
      />
      <Divider label={"Хранилище"}/>
      {<ScrollArea offsetScrollbars>
        {!!data && <Tree data={data}/>}
      </ScrollArea>}
    </>
  )
}
