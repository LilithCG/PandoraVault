import { ActionIcon, Divider, Flex, NavLink, ScrollArea } from '@mantine/core'
import { IconHome, IconPlus } from '@tabler/icons-react'
import { FolderHooks } from '../../hooks/FolderHooks'
import useFindMany = FolderHooks.useFindMany
import { Tree } from './folderTree/Tree'
import { Link } from 'react-router-dom'

export const MainNavBar = () => {
  const { data } = useFindMany()

  console.log(data)

  return (
    <>
      <NavLink
        component={Link}
        to={'/home'}
        leftSection={<IconHome size="1rem" stroke={1.5} />}
        label="Главная"
      />
      <Flex align={'center'} justify={'space-between'}>
        <Divider label={'Хранилище'} labelPosition={'left'}>
          {' '}
        </Divider>
        <ActionIcon variant="transparent" aria-label="Settings">
          <IconPlus style={{ width: '60%', height: '60%' }} />
        </ActionIcon>
      </Flex>
      {<ScrollArea offsetScrollbars>{!!data && <Tree data={data} />}</ScrollArea>}
    </>
  )
}
