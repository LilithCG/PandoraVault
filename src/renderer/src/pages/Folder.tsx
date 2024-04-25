import {useParams} from "react-router";
import {MantineReactTable, MRT_ColumnDef, useMantineReactTable} from "mantine-react-table";
import {useMemo} from "react";
import {Link} from "@prisma/client";
// @ts-ignore
import {MRT_Localization_RU} from "mantine-react-table/locales/ru/index.esm";
import {Flex, Title} from "@mantine/core";
import {FolderHooks} from "../hooks/FolderHooks";


export const Folder = () => {
  const {id} = useParams()
  const {data} = FolderHooks.useFindById(Number(id))


  const columns = useMemo<MRT_ColumnDef<Link>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Название',
      },
      {
        accessorKey: 'url',
        header: 'URL',
      },
      {
        accessorKey: 'description',
        header: 'Описание',
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data: data?.links ?? [],
    localization: MRT_Localization_RU
  });

  return (
    <Flex direction={"column"} gap={"lg"}>
      <Title order={3}>{data?.name}</Title>
      <MantineReactTable table={table}/>
    </Flex>
  );
}
