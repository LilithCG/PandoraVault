import {useQuery} from "@tanstack/react-query";
import {Folder} from "@prisma/client";
import {FolderTreeNode} from "../components/Layout/folderTree/Tree";

type FolderWithChildren = Folder & { children: Folder[] }

export namespace FolderHooks {

  export function useFindMany() {
    return useQuery({
      queryKey: ['folders'],
      queryFn: () => {
        return window.api.folder.findMany().then(r => findToTree(r))
      }
    })
  }
}

async function findToTree(folders: FolderWithChildren[]): Promise<FolderTreeNode[]> {
  const tree: FolderTreeNode[] = folders.map((folder) => ({
    ...folder,
    children: folder.children.map(child => ({
      ...child,
      children: []
    }))
  }))

  // async function getChildren(folders: FolderWithChildren[]) {
  //   folders.forEach(child => {
  //
  //   })
  // }



  return tree

}
