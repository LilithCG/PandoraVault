import {FolderTreeNode, Tree} from "./Tree";
import {NavLink} from "@mantine/core";
import {useNavigate} from "react-router-dom";


export const TreeNode = ({folder}: { folder: FolderTreeNode }) => {
  const hasChildren = folder.children.length > 0
  const navigate = useNavigate()

  return (
    <NavLink
      onClick={() => navigate(`/folder/${folder.id}`)}
      label={folder.name}
      childrenOffset={4}
      pb={2}
      pt={2}
    >
        {hasChildren && <Tree data={folder.children}/>}
    </NavLink>
  );
}
