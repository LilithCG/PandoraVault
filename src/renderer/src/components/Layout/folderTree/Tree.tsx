import {Folder} from "@prisma/client";
import {TreeNode} from "./TreeNode";

export type FolderTreeNode = Folder & {children: FolderTreeNode[]}

export const Tree = ({data}: {data: FolderTreeNode[]}) => {
  return (
    <>
      {data.map((folder) => (
        <TreeNode folder={folder} key={folder.id} />
      ))}
    </>
  );
}
