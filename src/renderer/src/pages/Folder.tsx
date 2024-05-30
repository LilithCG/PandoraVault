import { useParams } from 'react-router'
import { MantineReactTable, MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table'
import { useMemo } from 'react'
// @ts-ignore
import { MRT_Localization_RU } from 'mantine-react-table/locales/ru/index.esm'
import { ActionIcon, Button, Flex, Group, Pill, PillGroup, Title } from '@mantine/core'
import { FolderHooks } from '../hooks/FolderHooks'
import { IconEdit, IconTrash } from '@tabler/icons-react'

const DATA = [
  {
    id: 2,
    name: 'Сайт электрона',
    url: 'https://www.electronjs.org/',
    description: 'Фреймворк',
    folderId: 4,
    tags: ['#Важно!', '#TECH']
  },
  {
    id: 3,
    name: 'Яндекс',
    url: 'https://ya.ru/',
    description: 'Тут можно поискать',
    folderId: 4,
    tags: ['#Полезно']
  },
  {
    id: 1,
    name: 'localhost',
    url: 'http://localhost:8080',
    description: '',
    folderId: 4,
    tags: []
  }
]

export const Folder = () => {
  const { id } = useParams()
  const { data } = FolderHooks.useFindById(Number(id))

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Название'
      },
      {
        accessorKey: 'url',
        header: 'URL',
        Cell: ({ row }) => {
          return <a href={row.original.url}>{row.original.url}</a>
        }
      },
      {
        accessorKey: 'description',
        header: 'Описание'
      },
      {
        accessorKey: 'tags',
        header: 'Теги',
        Cell: ({ row }) => {
          return (
            <PillGroup>
              {row.original.tags.map((it) => (
                <Pill bg={'blue'}>{it}</Pill>
              ))}
            </PillGroup>
          )
        }
      },
      {
        accessorKey: '_spec',
        header: '',
        enableSorting: false,
        maxSize: 90,
        enableColumnFilter: false,
        enableColumnActions: false,
        Cell: () => {
          return (
            <Group gap={8}>
              <ActionIcon variant="outline" aria-label="Settings" size={'sm'}>
                <IconEdit style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon variant="outline" color={'red'} aria-label="Settings" size={'sm'}>
                <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            </Group>
          )
        }
      }
    ],
    []
  )

  const table = useMantineReactTable({
    columns,
    data: DATA ?? [],
    localization: MRT_Localization_RU
  })

  return (
    <Flex direction={'column'} gap={'lg'}>
      <Flex direction={'row'} justify={'space-between'}>
        <Title order={3}>{data?.name}</Title>
        <Group gap={4}>
          <Button size={'compact-md'} variant={'outline'}>
            Добавить ссылку
          </Button>
          <ActionIcon variant="outline" color={'red'} aria-label="Settings" size={'md'}>
            <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Flex>
      <MantineReactTable table={table} />
    </Flex>
  )
}
