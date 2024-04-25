import {Prisma, PrismaPromise} from "@prisma/client";
import {DefaultArgs, GetFindResult, GetResult} from "@prisma/client/runtime/library";
import db from "../database";

export interface IFolder {
  findById: (id: number) => Promise<GetResult<Prisma.$FolderPayload<DefaultArgs>, { include: { links: boolean }; where: { id: number } }, "findFirst">> & {};
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
  findById: (id: number) => db.folder.findFirst({
    include: {
      links: true
    },
    where: {
      id: id
    }
  }).then(r => r)
}
