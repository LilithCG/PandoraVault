import {Prisma, PrismaPromise} from "@prisma/client";
import {DefaultArgs, GetFindResult} from "@prisma/client/runtime/library";
import db from "../database";

export interface IFolder {
  findChildrenByParentId: (id: number) => PrismaPromise<GetFindResult<Prisma.$FolderPayload<DefaultArgs>, { include: { children: boolean }; where: { parentId: number } }>[]>;
  findMany: () => PrismaPromise<GetFindResult<Prisma.$FolderPayload<DefaultArgs>, { include: { children: boolean }; where: { parentId: null } }>[]>
}


export const FolderController: IFolder = {
  findMany: () => db.folder.findMany({
    include: {
      children: true
    },
    where: {
      parentId: null
    }
  }),
  findChildrenByParentId: (id: number) => db.folder.findMany({
    include: {
      children: true
    },
    where: {
      parentId: id
    }
  })
}
