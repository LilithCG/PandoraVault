import { FolderTreeNode, Tree } from './Tree'
import { NavLink } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router'

export const TreeNode = ({ folder }: { folder: FolderTreeNode }) => {
  const { id } = useParams()
  const hasChildren = folder.children.length > 0
  const navigate = useNavigate()

  return (
    <NavLink
      onClick={() => navigate(`/folder/${folder.id}`)}
      label={folder.name}
      childrenOffset={4}
      active={Number(id) == folder.id}
      pb={2}
      pt={2}
    >
      {hasChildren && <Tree data={folder.children} />}
    </NavLink>
  )
}
