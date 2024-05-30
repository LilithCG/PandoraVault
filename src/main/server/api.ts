import { ILink, LinkController } from './controller/LinkController'
import { FolderController, IFolder } from './controller/FolderController'

export interface PrismaAPI {
  link: ILink
  folder: IFolder
}

export const api = {
  link: LinkController,
  folder: FolderController
}
