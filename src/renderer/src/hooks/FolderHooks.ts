import { useQuery } from '@tanstack/react-query'
import { Folder } from '@prisma/client'
import { FolderTreeNode } from '../components/Layout/folderTree/Tree'

type FolderWithChildren = Folder & { children: Folder[] }

export namespace FolderHooks {
  export function useFindMany() {
    return useQuery({
      queryKey: ['folders'],
      queryFn: () => {
        return window.api.folder.findMany().then((r) => findToTree(r))
      }
    })
  }

  export function useFindById(id: number) {
    return useQuery({
      queryKey: ['folders', String(id)],
      queryFn: () => {
        return window.api.folder.findById(id)
      }
    })
  }
}

async function findToTree(folders: FolderWithChildren[]): Promise<FolderTreeNode[]> {
  const tree: FolderTreeNode[] = folders.map((folder) => ({
    ...folder,
    children: folder.children.map((child) => ({
      ...child,
      children: []
    }))
  }))

  return tree
}
