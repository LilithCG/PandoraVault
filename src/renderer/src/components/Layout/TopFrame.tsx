import { ActionIcon, Group } from '@mantine/core'
import { IconMinus, IconSquare, IconX } from '@tabler/icons-react'

export const TopFrame = () => {
  return (
    <Group>
      <ActionIcon
        variant={'transparent'}
        radius={0}
        h={27}
        w={45}
        className={'frame_button'}
        onClick={() => window.electron.ipcRenderer.send('collapse', [])}
      >
        <IconMinus size={'1rem'} />
      </ActionIcon>
      <ActionIcon
        variant={'transparent'}
        radius={0}
        h={27}
        w={45}
        className={'frame_button'}
        onClick={() => window.electron.ipcRenderer.send('maxMin', [])}
      >
        <IconSquare size={'0.9rem'} />
      </ActionIcon>
      <ActionIcon
        variant={'transparent'}
        radius={0}
        h={27}
        w={45}
        className={'frame_button'}
        onClick={() => window.electron.ipcRenderer.send('close', [])}
      >
        <IconX size={'1rem'} />
      </ActionIcon>
    </Group>
  )
}
