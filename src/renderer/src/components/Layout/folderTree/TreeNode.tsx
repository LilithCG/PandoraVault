import {FolderTreeNode, Tree} from "./Tree";
import {NavLink} from "@mantine/core";


export const TreeNode = ({folder}: { folder: FolderTreeNode }) => {
  const hasChildren = folder.children.length > 0

  return (
    <NavLink
      label={folder.name}
      childrenOffset={4}
      pb={2}
      pt={2}
    >
        {hasChildren && <Tree data={folder.children}/>}
    </NavLink>
  );
}
